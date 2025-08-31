"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { motion } from "framer-motion"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import emailjs from '@emailjs/browser'




const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+48) 576 221 786",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "joaoaleixo@joaosacarimaaleixo.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Aleja pokoju,  Krakow Poland",
  }

]

const Contact = () => {
 const [firstname, setFirstname] = useState("")
 const [lastname, setLastname] = useState("")
 const [email, setEmail] = useState("")
 const [phone, setPhone] = useState("")
 const [message, setMessage] = useState("")
 const [isLoading, setIsLoading] = useState(false)

 const [error, setError] = useState("")
 const [success, setSuccess] = useState("")

 const sendEmail = (e) => {
  e.preventDefault()
    setSuccess("")
    setError("")
    if (!email) {
      setError("Please enter your email")
      return  
    }
    if (!message) {
      setError("Please enter your message")
      return
    }

  const templatesParams = {
      from_name: email,
      to_name: "João Aleixo",
      message,
  }

  setError("")
  setIsLoading(true)
  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templatesParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text)
        setSuccess("Message sent successfully")

        setIsLoading(false)
        setFirstname("")
        setLastname("")
        setEmail("")
        setPhone("")
        setMessage("")
      },
      function (error) {
        console.log("FAILED...", error)
        setError("Something went wrong. Please send me a direct email using the address on the right.")
        setIsLoading(false)
      }
    )
}



 

  return (
    
        <motion.section 
          initial={{ opacity: 0,}}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="py-6 mx-4 xl:mx-0"
        >
          <div className="container mx-auto">
              <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* Form */}
                <div className="xl:w-[54%] order-2 xl:order-none">
                  
                  <form onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                  <h3 className="text-4xl text-[#00FF99]">Let's work together</h3>
                  <p className="text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur non exercitationem dicta, nemo et temporibus.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      type="firstname" 
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      name="firstname"
                      id="firstname"
                      placeholder="First name"
                      className=""
                    />
                  
                    <Input 
                      type="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      name="lastname"
                      id="lastname"
                      placeholder="Last name" 
                      className=""
                    />
              
                    <Input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      id="email"
                      placeholder="Email" 
                      className=""
                    />
              
                    <Input 
                      type="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      name="phone"
                      id="phone"
                      placeholder="Phone number" 
                      className=""
                    />
                  
                  </div>

                  <Textarea 
                   type="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    id="message"
                  
                    placeholder="Message" 
                    className="flex min-h-[100px] w-full rounded-md border-white/10 bg-[#1c1c22] px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00FF99] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  
                  <Button size="md" className="max-w-40 py-2 rounded-full cursor-pointer">
                    Send Message
                  </Button>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  {success && <p className="text-green-500 text-sm">{success}</p>}
                  {isLoading && <p className="text-yellow-500 text-sm">Sending...</p>}
                  <p className="text-white/60 text-sm">I will get back to you as soon as possible.</p>
                  </form>
                </div>

                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                 <ul className="flex flex-col gap-10">
                  {info.map((item, index) => (
                    <li key={index} className="flex items-center gap-6 mb-6">
                      <div className="text-[#00FF99] w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex justify-center items-center rounded-md bg-[#27272c]">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xl text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  ))}
                 </ul>
                  
                </div>
              </div>
          </div>
        </motion.section>
  
  )
}

export default Contact