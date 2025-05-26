import { Globe, Database, Shield, Cpu, Zap, BarChart3, Code } from "lucide-react"
import GlassCard from "./GlassCard"
import { motion } from "framer-motion"
import { Badge } from "./ui/badge"

export default function TechStack({ techDetails }: { techDetails: any }) {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case "frontend": return Globe
      case "backend": return Database
      case "blockchain": return Shield
      case "hardware": return Cpu
      case "firmware": return Zap
      case "deployment": return BarChart3
      default: return Code
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend": return "from-blue-500 to-cyan-500"
      case "backend": return "from-green-500 to-emerald-500"
      case "blockchain": return "from-purple-500 to-pink-500"
      case "hardware": return "from-orange-500 to-red-500"
      case "firmware": return "from-yellow-500 to-orange-500"
      case "deployment": return "from-indigo-500 to-purple-500"
      default: return "from-gray-500 to-gray-600"
    }
  }

  return (
    <GlassCard className="p-11 w-[80%] mx-auto mt-10">
      <h3 className="text-2xl font-bold mb-8 text-white">Tech Stack</h3>
      <div className="space-y-10 text-center">
        {Object.entries(techDetails).map(([category, technologies], index) => {
          const IconComponent = getIconForCategory(category)
          const colorClass = getCategoryColor(category)

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-[auto_1fr] gap-4 items-start"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center`}>
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white capitalize">{category}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {(technologies as string[]).map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Badge
                      variant="outline"
                      className={`bg-gradient-to-r ${colorClass}/20 border-white/20 text-white hover:border-white/40`}
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </GlassCard>
  )
}
