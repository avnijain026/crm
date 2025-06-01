import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  ctaNode? : React.ReactNode
  bottomImage?: {
    light: string
    dark: string
  }
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title,
      subtitle = {
        regular: "Build stronger relationships.",
        gradient: "Unify your sales, support, and success in one place.",
      },

      ctaNode,
      bottomImage = {
        light: "https://farmui.vercel.app/dashboard-light.png",
        dark: "https://farmui.vercel.app/dashboard.png",
      },
      gridOptions,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
         {/* Navigation */}
       <nav className="relative z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-center h-16">
             <div className="flex items-center space-x-2">
               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
               </div>
               <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                 CRM Pro
               </span>
             </div>          
             <div className="hidden md:flex items-center space-x-8">
               <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
               <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
               <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
               <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
               <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                 Sign In Dashboard
               </button>
             </div>

             <button 
              className="md:hidden"
              // onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} */}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        { (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Features</a>
              <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Services</a>
              <a href="#pricing" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Pricing</a>
              <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full">
                Sign In Dashboard
              </button>
            </div>
          </div>
        )}
      </nav>

        <section className="relative max-w-full mx-auto z-1">
          <RetroGrid {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
              <h1 className="text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
                Welcome to Xeno-CRM Platform
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
              <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                Powerful CRM solutions that help you
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
                   manage customers, streamline operations, and drive growth with intelligent automation and analytics.
                </span>
              </h2>

              <div className="mt-6 flex justify-center">
                {ctaNode}
                
              </div>
              

                <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of businesses that trust our CRM to manage their customer relationships and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>


            </div>
          </div>
        </section>
       

         <footer className="relative z-10 bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  {/* <BarChart3 className="w-5 h-5 text-white" /> */}
                </div>
                <span className="text-xl font-bold">CRM Pro</span>
              </div>
              <p className="text-gray-400">Transform your business with our powerful CRM solutions.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CRM Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
        

      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }




// import React, { useState, useEffect } from 'react';
// import { Users, ShoppingBag, Target, Activity, ArrowRight, BarChart3, Zap, Shield, Globe, CheckCircle, Star, Menu, X } from 'lucide-react';

// interface ServiceCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   features: string[];
//   delay: number;
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, delay }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   return (
//     <div className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//       <div className="relative z-10">
//         <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//           {icon}
//         </div>
//         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
//         <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
//         <ul className="space-y-3">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
//               <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
//           Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const AnimatedBackground: React.FC = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//       <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//       <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
//     </div>
//   );
// };

// const CRMLandingPage: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const services = [
//     {
//       icon: <Users className="w-8 h-8 text-white" />,
//       title: "Customer Management",
//       description: "Centralize all customer data, interactions, and insights in one powerful platform designed for growth.",
//       features: [
//         "360° customer profiles with interaction history",
//         "Advanced contact management and segmentation",
//         "Automated follow-up and engagement tracking",
//         "Integration with social media and communication channels"
//       ]
//     },
//     {
//       icon: <ShoppingBag className="w-8 h-8 text-white" />,
//       title: "Order Processing",
//       description: "Streamline your sales pipeline from lead generation to order fulfillment with intelligent automation.",
//       features: [
//         "Real-time order tracking and status updates",
//         "Automated invoice generation and billing",
//         "Inventory management and stock alerts",
//         "Multi-channel order synchronization"
//       ]
//     },
//     {
//       icon: <Target className="w-8 h-8 text-white" />,
//       title: "Segment Rules",
//       description: "Create dynamic customer segments with advanced rules and trigger personalized marketing campaigns.",
//       features: [
//         "Behavioral-based customer segmentation",
//         "Dynamic rule engine with real-time updates",
//         "Personalized marketing campaign automation",
//         "A/B testing and performance analytics"
//       ]
//     },
//     {
//       icon: <Activity className="w-8 h-8 text-white" />,
//       title: "Activity Log",
//       description: "Monitor all system activities, user interactions, and business processes with comprehensive logging.",
//       features: [
//         "Real-time activity monitoring and alerts",
//         "Comprehensive audit trails and compliance",
//         "User behavior analytics and insights",
//         "Custom reporting and data visualization"
//       ]
//     }
//   ];

//   const stats = [
//     { number: "50K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
//     { number: "99.9%", label: "Uptime", icon: <Shield className="w-6 h-6" /> },
//     { number: "150+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
//     { number: "4.9", label: "Rating", icon: <Star className="w-6 h-6" /> }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
//       <AnimatedBackground />
      
//       {/* Navigation */}
//       <nav className="relative z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
//                 <BarChart3 className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 CRM Pro
//               </span>
//             </div>
            
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
//               <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
//               <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
//               <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
//               <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
//                 Sign In Dashboard
//               </button>
//             </div>

//             <button 
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
//             <div className="px-4 py-4 space-y-4">
//               <a href="#features" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Features</a>
//               <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Services</a>
//               <a href="#pricing" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Pricing</a>
//               <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</a>
//               <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full">
//                 Sign In Dashboard
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
//         <div className="text-center">
//           <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               Transform
//             </span>
//             <br />
//             Your Business
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            // Powerful CRM solutions that help you manage customers, streamline operations, and drive growth with intelligent automation and analytics.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center">
//               Get Started Free
//               <ArrowRight className="w-5 h-5 ml-2" />
//             </button>
//             <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
//               Watch Demo
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
      // <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      //   <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      //     {stats.map((stat, index) => (
      //       <div key={index} className="text-center group">
      //         <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
      //           <div className="text-white">{stat.icon}</div>
      //         </div>
      //         <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
      //         <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
      //       </div>
      //     ))}
      //   </div>
      // </section>

      // {/* Services Section */}
      // <section id="services" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      //   <div className="text-center mb-16">
      //     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
      //       Powerful CRM <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Features</span>
      //     </h2>
      //     <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      //       Everything you need to manage your business relationships and grow your revenue in one integrated platform.
      //     </p>
      //   </div>

      //   <div className="grid md:grid-cols-2 gap-8">
      //     {services.map((service, index) => (
      //       <ServiceCard
      //         key={index}
      //         icon={service.icon}
      //         title={service.title}
      //         description={service.description}
      //         features={service.features}
      //         delay={index * 200}
      //       />
      //     ))}
      //   </div>
      // </section>

      // {/* CTA Section */}
      // <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      //   <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
      //     <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
      //     <div className="relative z-10">
      //       <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
      //       <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
      //         Join thousands of businesses that trust our CRM to manage their customer relationships and drive growth.
      //       </p>
      //       <div className="flex flex-col sm:flex-row gap-4 justify-center">
      //         <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      //           Start Free Trial
      //         </button>
      //         <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
      //           Contact Sales
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </section>

//       {/* Footer */}
      // <footer className="relative z-10 bg-gray-900 dark:bg-gray-950 text-white py-12">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <div className="grid md:grid-cols-4 gap-8">
      //       <div>
      //         <div className="flex items-center space-x-2 mb-4">
      //           <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
      //             <BarChart3 className="w-5 h-5 text-white" />
      //           </div>
      //           <span className="text-xl font-bold">CRM Pro</span>
      //         </div>
      //         <p className="text-gray-400">Transform your business with our powerful CRM solutions.</p>
      //       </div>
      //       <div>
      //         <h3 className="font-semibold mb-4">Product</h3>
      //         <ul className="space-y-2 text-gray-400">
      //           <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">API</a></li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h3 className="font-semibold mb-4">Company</h3>
      //         <ul className="space-y-2 text-gray-400">
      //           <li><a href="#" className="hover:text-white transition-colors">About</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h3 className="font-semibold mb-4">Support</h3>
      //         <ul className="space-y-2 text-gray-400">
      //           <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
      //         </ul>
      //       </div>
      //     </div>
      //     <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      //       <p>&copy; 2025 CRM Pro. All rights reserved.</p>
      //     </div>
      //   </div>
      // </footer>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CRMLandingPage;