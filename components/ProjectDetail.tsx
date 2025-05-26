"use client";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Play,
  Star,
  Zap,
  Eye,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import projects from "@/lib/projects"
import ParticleBackground from "./ParticleBackground"
import GlassCard from "./GlassCard"
import ImageGallery from "./ImageGalaryComponent"
import TechStack from "./TechStackComponent"
import ProjectStats from "./ProjectStats"
import AnimatedCursor from "./AnimatedCursor"

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const router = useRouter()
  const project = projects.find(p => p.id === parseInt(params.id))

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <AnimatedCursor />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => router.push("/")} className="bg-blue-500 hover:bg-blue-600 cursor-hover">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedCursor />
      <ParticleBackground />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full backdrop-blur-lg bg-black/20 border-b border-white/10 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                onClick={() => router.push("/")}
                className="text-white hover:bg-white/10 cursor-hover"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </motion.div>
            <div className="flex items-center space-x-4">
              {project.github && (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button size="sm" variant="outline" asChild className="cursor-hover">
                    <Link href={project.github}>
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              )}
              {project.demo && (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button size="sm" asChild className="cursor-hover">
                    <Link href={project.demo}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {project.description}
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {project.tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Badge variant="secondary" className="text-sm px-4 py-2 cursor-hover">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {project.demo && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 cursor-hover"
                  >
                    <Link href={project.demo}>
                      <Play className="mr-2 h-5 w-5" />
                      Live Demo
                    </Link>
                  </Button>
                </motion.div>
              )}
              {project.github && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-white/20 hover:bg-white/10 cursor-hover"
                  >
                    <Link href={project.github}>
                      <Github className="mr-2 h-5 w-5" />
                      View Code
                    </Link>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ProjectStats project={project} />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Project Gallery
          </motion.h2>
          <ImageGallery images={(project.images as string[])} title={project.title} />
        </div>
      </section>

      {/* Tech Stack - Refined */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Built With
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <TechStack techDetails={project.techDetails} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <GlassCard className="p-6 h-full cursor-hover">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature}</h3>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges - Refined */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Development Challenges
          </motion.h2>
          <motion.p
            className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every great project comes with its unique set of obstacles. Here are the key challenges I encountered during development.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <GlassCard className="p-6 h-full cursor-hover group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                        <AlertTriangle className="h-6 w-6 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-orange-300 transition-colors duration-300">
                          Challenge #{index + 1}
                        </h3>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {challenge}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-12 max-w-4xl mx-auto cursor-hover">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Interested in This Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can work together on similar projects or explore new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 cursor-hover"
                  >
                    <Link href="/#contact" className="flex items-center">
                      Get in Touch
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => router.push("/")}
                    className="border-white/20 hover:bg-white/10 cursor-hover"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View More Projects
                  </Button>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}