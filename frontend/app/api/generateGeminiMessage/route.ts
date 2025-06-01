import { NextResponse } from "next/server";

const createPrompt = (name: string, sanitizedRule: string) => {
  return `You are a CRM assistant helping to write personalized promotional messages for users. Based on the campaign details below, generate a short, friendly marketing message for each user. The message should include the user's name (placeholder as {name}) and feel personal but concise.

### Campaign Details:
- Campaign Name: ${name}
- Segment Rules: ${sanitizedRule}

### Message Style:
- Friendly and informal tone
- 1-2 sentences
- Include a benefit or incentive (e.g., discount, special offer)
- Keep it personalized with the user’s name (e.g., "Hi {name}, …")

### OUTPUT style:
Just the message, no other text.

### Now generate a message:
`;
};

export async function POST(req: Request) {
  try {
    const { name, sanitizedRule } = await req.json();
    const prompt = createPrompt(name, sanitizedRule);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    // Debug log
    console.log("Gemini full response:", JSON.stringify(data, null, 2));

    // Defensive check
    const rawMessage = data?.candidates?.[0]?.content?.parts?.[0]?.text || null;

    if (!rawMessage) {
      return NextResponse.json({
        success: false,
        error: "Gemini returned no message. Check API key or prompt.",
        raw: data,
      });
    }

    // Replace the {name} placeholder with actual user name
    const personalizedMessage = rawMessage.replace(/\{name\}/g, name);

    return NextResponse.json({
      success: true,
      message: personalizedMessage,
    });
  } catch (e) {
    console.error("Gemini Error:", e);
    return NextResponse.json({
      success: false,
      error: "Failed to generate message",
    });
  }
}
