import { JetBrains_Mono, Geist, Geist_Mono } from "next/font/google";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "João Aleixo",
  description: "Personal Portfolio of João Aleixo, a Software Engineer based in Poland. ",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${geistSans.variable} ${geistMono.variable}  bg-[#1c1c22]`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>

        {/* Socials on the bottom-left */}
       <div className="hidden fixed bottom-0 left-12 2xl:flex flex-col items-center">
       
       <div className="flex flex-col items-center gap-4 my-4">
         <a href="https://github.com/sacarima" target="_blank" className="text-2xl text-gray-500 hover:text-[#00FF99]">
           <FaGithub />
         </a>
         <a href="https://x.com/SacarimaAleixo" target="_blank" className="text-2xl text-gray-500 hover:text-[#00FF99]">
           <FaTwitter />
         </a>
         <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" className="text-2xl text-gray-500 hover:text-[#00FF99]">
           <FaLinkedin />
         </a>
       </div>
       <div className="border-l-2 h-[150px] border-gray-500"></div>
     </div>

     {/* Email on the bottom-right */}
     <div className="hidden fixed bottom-0 right-[-50px] 2xl:flex flex-col items-center gap-25">
       
       <div className="mb-4 text-sm text-gray-500 transform rotate-90 font-extralight">
         joaoaleixo@techbugtion.com
       </div>
       <div className="border-l-2 h-[150px] border-gray-500"></div>
     </div>
      </body>
    </html>
  )
}
