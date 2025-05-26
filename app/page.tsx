"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Code,
  Coins,
  Zap,
  Cpu,
  Github,
  ExternalLink,
  Download,
  Mail,
  Phone,
  Linkedin,
  Moon,
  Sun,
  Menu,
  X,
  Quote,
  MapPin,
  GraduationCap,
  Trophy,
  Star,
  ChevronUp,
  Filter,
  Play,
  Eye,
} from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import ParticleBackground from "@/components/ParticleBackground"
import AnimatedCursor from "@/components/AnimatedCursor"
import GlassCard from "@/components/GlassCard"
import projects from "@/lib/projects"
import { useRouter } from "next/navigation"



// Typing Animation Component
function TypingAnimation({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
      />
    </span>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [projectFilter, setProjectFilter] = useState("All")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const router = useRouter()
  const services = [
    {
      icon: Code,
      title: "Web App Development",
      description:
        "Full-stack development with React, Next.js, Node.js, PostgreSQL, and MongoDB for scalable business solutions.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: Coins,
      title: "Blockchain Integration",
      description: "Smart contract development with Solidity, Web3.js, and secure crypto payment implementations.",
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: Zap,
      title: "Real-Time Apps",
      description: "WebSockets, WebRTC, and scalable backend systems with Kafka for live data applications.",
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: Cpu,
      title: "IoT Integrations",
      description: "ESP32 development, sensor data tracking, and real-time dashboards for connected devices.",
      color: "from-orange-500 to-red-500",
      delay: 0.4,
    },
  ]



  const testimonials = [
    {
      quote: "Ujjwal is an incredibly fast problem solver who can turn ideas into working apps in record time.",
      author: "Hackathon Teammate",
      role: "Software Engineer",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: "His expertise in blockchain and real-time systems made our project stand out in the competition.",
      author: "Project Mentor",
      role: "Tech Lead",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const filterCategories = ["All", "WebApp", "Blockchain", "IoT"]
  const filteredProjects =
    projectFilter === "All" ? projects : projects.filter((project) => project.category === projectFilter)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const handleProjectClick = (projectId: number) => {
    router.push(`/projects/${projectId}`)
  }
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedCursor />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ scaleX: scrollYProgress }}

      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full backdrop-blur-lg bg-black/20 border-b border-white/10 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
            >
              UP
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Services", "Projects", "About", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors relative group"
                    data-interactive
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="relative overflow-hidden"
                  data-interactive
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </motion.div>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                data-interactive
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden mt-4 pb-4 border-t border-white/10"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="flex flex-col space-y-4 pt-4">
                  {["Home", "Services", "Projects", "About", "Contact"].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-blue-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20" ref={heroRef}>
        <ParticleBackground />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Ujjwal Parashar
            </motion.h1>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl mb-4 text-gray-300">
                <TypingAnimation text="I build modern, scalable, and secure web applications for startups & businesses." />
              </p>
              <p className="text-lg text-gray-400">Full Stack Developer | Web Apps | Blockchain | Real-Time Systems</p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`#contact`}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25"
                    data-interactive
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Hire Me
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-blue-500/50 hover:bg-blue-500/10"
                  data-interactive
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View Portfolio
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-purple-500/50 hover:bg-purple-500/10"
                  data-interactive
                  onClick={() => window.open("/ujjwal_resume_2025 (1).pdf", "_blank")}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 border border-blue-500/30 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16 border border-purple-500/30 rounded-lg"
          animate={{ rotate: -360, y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I offer comprehensive development services to help bring your ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center p-6 h-full group cursor-pointer" data-interactive>
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="#contact">
                      <Button
                        variant="outline"
                        className="w-full border-blue-500/50 hover:bg-blue-500/20 hover:border-blue-400"
                        data-interactive
                      >
                        Get a Quote
                      </Button>
                    </Link>
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              A showcase of my recent work in web development, blockchain, and IoT
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {filterCategories.map((category) => (
                <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={projectFilter === category ? "default" : "outline"}
                    onClick={() => setProjectFilter(category)}
                    className={`${projectFilter === category
                        ? "bg-gradient-to-r from-blue-500 to-purple-600"
                        : "border-gray-600 hover:border-blue-500"
                      }`}
                    data-interactive
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    {category}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  <GlassCard className="overflow-hidden group cursor-pointer h-full" data-interactive onClick={() => handleProjectClick(project.id)}>
                    <div className="relative aspect-video overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <motion.div
                        className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100"
                        initial={{ y: -20 }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button variant="secondary" size="icon" asChild data-interactive>
                          <Link href={project.github}>
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="secondary" size="icon" asChild data-interactive>
                          <Link href={project.demo}>
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" data-interactive>
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl bg-black/90 border-gray-800">
                            <DialogHeader>
                              <DialogTitle className="text-2xl text-white">{project.title}</DialogTitle>
                            </DialogHeader>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <img
                                  src={project.image || "/placeholder.svg"}
                                  alt={project.title}
                                  className="w-full rounded-lg"
                                />
                              </div>
                              <div className="space-y-4">
                                <p className="text-gray-300">{project.longDescription}</p>
                                <div>
                                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                                  <ul className="space-y-1">
                                    {project.features.map((feature, idx) => (
                                      <li key={idx} className="text-gray-400 flex items-center">
                                        <Star className="h-3 w-3 mr-2 text-blue-400" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="flex space-x-4">
                                  <Button asChild data-interactive>
                                    <Link href={project.github}>
                                      <Github className="mr-2 h-4 w-4" />
                                      GitHub
                                    </Link>
                                  </Button>
                                  <Button variant="outline" asChild data-interactive>
                                    <Link href={project.demo}>
                                      <Play className="mr-2 h-4 w-4" />
                                      Live Demo
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>

                      <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8">
                  <div className="space-y-8">
                    <motion.div
                      className="flex items-start space-x-4"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg">Education</h3>
                        <p className="text-gray-400">3rd Year B.Tech ECE @ DTU (CGPA: 8.9)</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg">Achievements</h3>
                        <p className="text-gray-400">Hackathon Winner (Diamante Net, LIVE THE CODE 3.0)</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg">Passion</h3>
                        <p className="text-gray-400">
                          Building impactful digital products with cutting-edge technology
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <p className="text-gray-400 leading-relaxed">
                      Passionate about building impactful digital products that solve real-world problems. With a strong
                      background in electronics, real-time systems, and cloud infrastructure, I bring a unique
                      perspective to software development.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          asChild
                          className="border-blue-500/50 hover:bg-blue-500/20"
                          data-interactive
                        >
                          <Link href="https://linkedin.com/in/ujjwal-parashar-180798289">
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                          </Link>
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          asChild
                          className="border-purple-500/50 hover:bg-purple-500/20"
                          data-interactive
                        >
                          <Link href="https://github.com/ujjwalparashar30">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </Link>
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          className="border-green-500/50 hover:bg-green-500/20"
                          data-interactive
                          onClick={() => window.open("/ujjwal_resume_2025 (1).pdf", "_blank")}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Resume PDF
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
                  <div className="space-y-6">
                    {[
                      { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] },
                      { category: "Backend", skills: ["Node.js", "PostgreSQL", "MongoDB", "Kafka", "WebSockets"] },
                      {
                        category: "Blockchain & IoT",
                        skills: ["Solidity", "Web3.js", "ESP32", "Arduino", "Sensor Integration"],
                      },
                    ].map((skillGroup, index) => (
                      <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="font-semibold mb-3 text-blue-400">{skillGroup.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              whileHover={{ scale: 1.1, y: -2 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Badge
                                variant="outline"
                                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-300 hover:border-blue-400"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              What People Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: -15, scale: 0.8 }}
                whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 text-center relative overflow-hidden group" data-interactive>
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  />

                  <Quote className="h-12 w-12 text-blue-400 mx-auto mb-6" />

                  <motion.p
                    className="text-lg mb-6 italic text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>

                  <motion.div
                    className="flex items-center justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  >
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full border-2 border-blue-500/50"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-lg text-gray-400">Got an idea? Let's build something great together.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8">
                  <h3 className="text-2xl font-bold mb-8 text-white">Get in Touch</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, text: "ujjwalparashar_23ec218@dtu.ac.in", color: "from-blue-500 to-cyan-500" },
                      { icon: Phone, text: "+91-9205290713", color: "from-green-500 to-emerald-500" },
                      { icon: MapPin, text: "Delhi, India", color: "from-purple-500 to-pink-500" },
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 group cursor-pointer"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        data-interactive
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <contact.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">{contact.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8">
                  <form action="https://formsubmit.co/whomtalkto@gmail.com" method="POST" className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Input
                        name="name"
                        placeholder="Your Name"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500"
                        data-interactive
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500"
                        data-interactive
                      />
                    </motion.div>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Textarea
                        placeholder="Project Details"
                        name="message"
                        rows={4}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 resize-none"
                        data-interactive
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25"
                        data-interactive
                      >
                        <motion.span
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          Send Message
                        </motion.span>
                      </Button>
                    </motion.div>
                  </form>
                </GlassCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm text-gray-400">© 2025 Ujjwal Parashar. Freelance Web Developer for Hire.</p>
            </motion.div>

            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {["About", "Projects", "Contact", "GitHub", "LinkedIn"].map((item, index) => (
                <motion.div key={item} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href={
                      item === "GitHub"
                        ? "https://github.com/ujjwalparashar30"
                        : item === "LinkedIn"
                          ? "https://linkedin.com/in/ujjwal-parashar-180798289"
                          : `#${item.toLowerCase()}`
                    }
                    className="text-sm hover:text-blue-400 transition-colors"
                    data-interactive
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25 z-40"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            data-interactive
          >
            <ChevronUp className="h-6 w-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
