This project is a CRM Management System that helps marketing teams generate personalized promotional messages for their users based on campaign details and targeting rules. It leverages Google's Gemini AI to dynamically create friendly, concise messages tailored for each customer segment.

🧠 Features
📝 Create marketing campaigns with custom rules.
🤖 Auto-generate promotional messages using Gemini AI.
👥 Personalize messages with user names.
🖥️ Full-stack app with separate frontend and backend.
🔐 Secure API integration using .env for sensitive keys.


🏗️ Tech Stack
Frontend: Next.js (React)
Backend: Node.js + Express
AI Integration: Gemini API (Google Generative Language API)
Language: TypeScript
Database: MongoDB

#Live Website 
https://crm-xeno-omega.vercel.app/

🚀 Getting Started
⚙️ Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
This will start the Next.js development server on http://localhost:3000.

🛠️ Backend Setup
bash
Copy
Edit
cd backend
npm install
npm run dev
This starts the backend server on http://localhost:5001.

🔌 API Integration (Gemini AI)
Get a Gemini API Key:
Visit Google AI Studio or Google Cloud Console.
Enable the Generative Language API.
Generate an API key.
Create a .env file in the root directory and add:
env
Copy
Edit
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
NEXT_PUBLIC_BACKEND_URL=http://localhost:5001
GEMINI_API_KEY=your-gemini-api-key
Restart both frontend and backend after setting up the environment variables.

API Documentation
The backend API is documented using Swagger (OpenAPI). Once the backend server is running, you can access the Swagger UI at:
`http://localhost:5001/api-docs` (or your backend URL + `/api-docs`)
This interface allows you to view all available API endpoints, their request/response schemas, and test them directly.

🧪 Example Campaign
Campaign Name: Winter Sale
Segment Rule: spend > 1000 AND visits < 20
Generated Message:
Hi {name}, our Winter Sale is here! Get ready for cozy savings and treat yourself to something special.
(The {name} placeholder is replaced dynamically with each user's name.)

🛡️ Notes
Ensure your .env file is never pushed to version control.
If the Gemini API throws an error, check:
Whether the key is valid and active.
If the correct model version is being used (gemini-2.0-flash).
Proper content formatting in the API request body.

📂 Folder Structure
bash
Copy
Edit
/frontend      --> Next.js client UI
/backend       --> Express backend server
.env           --> Environment variables (not committed)




* Limitation
  * Limited message customization
  * No access control
  * API rate limits and dependency on Gemini
  * Basic error handling

* Future Scope
  * Add database integration
  * Dynamic personalization with real user data
  * Build an admin dashboard
  * Implement authentication system
  * Add campaign analytics
  * Support for multiple channels (SMS, email, etc.)
  * Customizable prompt templates
  * Add rate limiting and retry logic
  * Option to use different AI models (like GPT or Claude)


📌 TODO / Future Enhancements
✅ Add Gemini API defensive error handling.
⏳ Store campaigns and user segments in a database.
⏳ Add authentication and admin panel.
⏳ Export campaign messages as CSV or PDF.

👨‍💻 Authors
[Avni Jain] — Full Stack Developer
Thank you for the opportunity to work on this assignment!







