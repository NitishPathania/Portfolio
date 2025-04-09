"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Smartphone,
  ShoppingCart,
  Cloud,
  BarChart,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  const services = [
    {
      title: "Mobile App Development",
      icon: <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-500" />,
      description:
        "I build native and cross-platform mobile apps that deliver exceptional user experiences with Flutter, React Native, and Swift.",
    },
    {
      title: "Web App Development",
      icon: <Code className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500" />,
      description:
        "From responsive websites to complex web applications, I create fast, accessible, and beautiful digital experiences.",
    },
    {
      title: "Shopify Development",
      icon: <ShoppingCart className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" />,
      description:
        "Custom Shopify solutions that help your e-commerce business stand out with unique features and optimized conversions.",
    },
    {
      title: "Digital Marketing",
      icon: <BarChart className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />,
      description:
        "Strategic digital marketing solutions that increase your online visibility and drive meaningful engagement with your audience.",
    },
  ]

  const projects = [
    {
      title: "Bruno Pharma",
      category: " Shopify + Web",
      image: "/placeholder.svg?height=600&width=800",
      description: " An e-commerce store built with Shopify (backend) and Next.js (frontend), designed for health supplements. Fast, clean, and built for conversions.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "The Mediterranean Life",
      category: "Web",
      image: "/placeholder.svg?height=600&width=800",
      description: " A modern travel blog and booking site for Mediterranean getaways. Clean layout, smooth user experience, and focused on storytelling + marketing.",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "shopify"],
    },
    {
      title: "Astar8",
      category: "Mobile App",
      image: "/placeholder.svg?height=600&width=800",
      description: " A beautifully designed astrological + numerology app that helps users generate personalized readings and compatibility reports. Intuitive and user-friendly.",
      tech: ["React", "JavaScript", "React-native", "Node.js", "MongoDB", "Express.js", "Firebase"],
    },
    {
      title: "GuardX",
      category: "Mobile + Web",
      image: "/placeholder.svg?height=600&width=800",
      description: " A smart visitor management system for residential societies. This SaaS product simplifies visitor tracking and enhances security with real-time logging and mobile alerts.",
      tech: ["React", "JavaScript", "Node.js", "MongoDB", "Express.js", "Firebase"],
    },
    {
      title: "Foodeus",
      category: "Mobile + Web",
      image: "/placeholder.svg?height=600&width=800",
      description: " A local food discovery platform that helps users find and explore food items near them. Clean UX and real-time suggestions to satisfy any craving.",
      tech: ["Next.js", "MongoDB", "Google cloud API"],
    },
    {
      title: "SWIF",
      category: "Mobile + Web",
      image: "/placeholder.svg?height=600&width=800",
      description: " A robust SaaS platform for field service businesses. From task assignments to real-time tracking, SWIF helps companies manage operations with ease and clarity.",
      tech: ["React Native", "Node.js", "Socket.io", "React", "JavaScript", "MongoDB", "Express.js", "Firebase"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              QQD
            </div>
            <span className="font-bold text-base sm:text-xl hidden sm:inline-block">Quick Quality Developers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 desktop-nav">
            {["about", "services", "why", "portfolio", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${activeSection === section ? "text-emerald-500" : "text-gray-300"
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 mobile-nav-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800">
            <div className="container mx-auto px-4 py-2 sm:py-4 flex flex-col space-y-2 sm:space-y-4">
              {["about", "services", "why", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-base font-medium transition-colors hover:text-emerald-400 py-2 sm:py-3 ${activeSection === section ? "text-emerald-500" : "text-gray-300"
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-[80vh] sm:min-h-[90vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-20 w-48 sm:w-96 h-48 sm:h-96 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 py-10 sm:py-20 z-10 relative">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl text-center md:text-left"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                  I build high-quality apps — fast.
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 md:mb-8">
                  Delivering digital products with speed and precision, without compromising on quality or user
                  experience.
                </p>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white text-sm sm:text-base py-2 px-4 sm:py-2 sm:px-6"
                >
                  Let's Work Together
                  <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full md:w-1/2 h-60 sm:h-80 flex items-center justify-center"
              >
                <div className="relative w-full max-w-xs sm:max-w-md aspect-square m-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-transparent to-transparent z-10"></div>
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Code visualization"
                    width={600}
                    height={600}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>

        </section>

        {/* About Me Section */}
        <section id="about" className="py-10 sm:py-16 md:py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row items-center gap-8 sm:gap-12"
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-emerald-500/20">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Developer portrait"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                  About Me
                </h2>
                <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">
                  I'm a passionate solo developer with experience in building digital products that solve real problems. My journey began with a simple belief : technology should make life better, not more complicated.
                </p>
                <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">
                  What sets me apart is my problem-solving mindset and user-first approach to development. I don't just write code : I create solutions that are intuitive, efficient, and enjoyable to use.
                </p>
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                  Working with me means you get the personal touch of a dedicated developer combined with the quick turnaround that modern businesses need. No bureaucracy, no unnecessary delays—just quality work delivered on time.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["JavaScript", "React", "Node.js", "Shopify", "UI/UX Design"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 bg-gray-800 rounded-full text-xs sm:text-sm text-gray-300"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-10 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                Services
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                I offer a range of development services tailored to your specific needs. Each service is delivered with
                a focus on quality, speed, and exceptional user experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors h-full">
                    <CardContent className="p-4 sm:p-6 flex flex-col h-full card-content">
                      <div className="mb-3 sm:mb-4">{service.icon}</div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Me Section */}
        <section id="why" className="py-10 sm:py-16 md:py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                Why Work With Me
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Choosing the right developer is crucial for your project's success. Here's why clients continue to trust
                me with their digital needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gray-800/30 rounded-2xl p-4 sm:p-6 border border-gray-700"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-emerald-500/20 p-2 sm:p-3 rounded-lg">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Direct Communication</h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      No account managers or middlemen. You work directly with me throughout the entire project,
                      ensuring clear communication and faster results.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gray-800/30 rounded-2xl p-4 sm:p-6 border border-gray-700"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Quick Turnaround</h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      I pride myself on efficiency without sacrificing quality. Your project gets my full attention,
                      resulting in faster delivery times.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gray-800/30 rounded-2xl p-4 sm:p-6 border border-gray-700"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-green-500/20 p-2 sm:p-3 rounded-lg">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Quality-Focused</h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      I don't cut corners. Every line of code is written with maintainability, performance, and security
                      in mind.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gray-800/30 rounded-2xl p-4 sm:p-6 border border-gray-700"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-purple-500/20 p-2 sm:p-3 rounded-lg">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">End-to-End Service</h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      From initial concept to deployment and maintenance, I handle all aspects of your project for a
                      seamless experience.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700 max-w-4xl mx-auto testimonial-container"
            >
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-base sm:text-lg italic text-gray-300 mb-3 sm:mb-4">
                    "Working with Quick Quality Developers was a game-changer for our startup. They delivered our MVP in
                    half the time we expected, and the quality was exceptional. Their ability to understand our vision
                    and translate it into a working product was impressive."
                  </p>
                  <div>
                    <p className="font-bold text-white">Sarah Johnson</p>
                    <p className="text-xs sm:text-sm text-gray-400">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-10 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                Portfolio
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Browse through some of my recent projects. Each one represents a unique challenge solved with creativity
                and technical expertise.
              </p>
            </motion.div>

            <Tabs defaultValue="All" className="mb-8 sm:mb-12">
              <TabsList className="mx-auto bg-gray-800/50 tabs-list flex flex-wrap justify-center">
                {["All", "Web", "Mobile", "Shopify"].map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-gray-700 tabs-trigger text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="All" className="mt-6 sm:mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 portfolio-grid">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </TabsContent>

              {["Web", "Mobile", "Shopify"].map((category) => (
                <TabsContent key={category} value={category} className="mt-6 sm:mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 portfolio-grid">
                    {projects
                      .filter((project) => project.category === category)
                      .map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10 sm:py-16 md:py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                Let's Work Together
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. Fill out the form below, and I'll get back to you
                within 24 hours.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto contact-container">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full lg:w-1/2"
              >
                <form className="space-y-4 sm:space-y-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project"
                      className="min-h-[100px] sm:min-h-[150px] bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white">
                    Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full lg:w-1/2 space-y-6 sm:space-y-8"
              >
                <div className="bg-gray-800/30 rounded-2xl p-4 sm:p-6 border border-gray-700">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Frequently Asked Questions</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-200 mb-1">How quickly can you start on my project?</h4>
                      <p className="text-sm sm:text-base text-gray-300">
                        I typically can begin work within 1-2 weeks of project approval, sometimes sooner for smaller
                        projects.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 mb-1">What is your pricing structure?</h4>
                      <p className="text-sm sm:text-base text-gray-300">
                        I offer both project-based and hourly pricing options. We'll discuss what works best for your
                        specific needs.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 mb-1">Do you provide ongoing support?</h4>
                      <p className="text-sm sm:text-base text-gray-300">
                        Yes, I offer maintenance and support packages to keep your project running smoothly after
                        launch.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-2xl p-4 sm:p-6 border border-gray-700">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Availability</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                    I'm currently available for new projects starting in:
                  </p>
                  <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg p-2 sm:p-3 text-center">
                    <p className="text-white font-bold">May 2025</p>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 mt-3 sm:mt-4">
                    For urgent projects, please mention this in your message and I'll see if I can accommodate your
                    timeline.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center footer-container">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                QQD
              </div>
              <span className="font-bold text-base sm:text-xl">Quick Quality Developers</span>
            </div>

            <div className="flex space-x-4 sm:space-x-6 mb-4 sm:mb-0 footer-links">
              <a  href="mailto:t8mdotadu@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="https://linkedin.com/in/udit-chauhan-82639216"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>

            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs sm:text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Quick Quality Developers. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0 footer-links">
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group"
    >
      <Card className="overflow-hidden bg-gray-800/50 border-gray-700 hover:border-emerald-500/50 transition-all h-full">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-emerald-500/90 text-white text-xs px-2 py-1 rounded-full">
            {project.category}
          </div>
        </div>
        <CardContent className="p-3 sm:p-4 md:p-6 card-content">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-white">{project.title}</h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
