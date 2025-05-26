import { Calendar, Code, Star, Users } from "lucide-react"
import GlassCard from "./GlassCard"
import { motion } from "framer-motion";

export default function ProjectStats({ project }: { project: any }) {
  const stats = [
    { icon: Calendar, label: "Timeline", value: project.timeline },
    { icon: Users, label: "Team Size", value: project.teamSize },
    { icon: Code, label: "Status", value: project.status },
    { icon: Star, label: "Year", value: project.year },
  ]

  return (
    <GlassCard className="p-6">
      <h3 className="text-2xl font-bold mb-6 text-white">Project Stats</h3>
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
            <p className="font-semibold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}