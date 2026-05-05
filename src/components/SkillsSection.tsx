import { motion } from "framer-motion";

const skills = [
  { name: "AWS Cloud Infrastructure (EC2, S3, IAM, VPC)", level: 88, color: "bg-orange-500" },
  { name: "Network Architecture (MikroTik, FortiGate, VPN)", level: 92, color: "bg-blue-500" },
  { name: "Scripting & Automation (Python, Bash)", level: 85, color: "bg-yellow-500" },
  { name: "Windows Server & Active Directory (RBAC)", level: 90, color: "bg-cyan-500" },
  { name: "Linux Administration", level: 85, color: "bg-emerald-500" },
  { name: "Disaster Recovery & Database Backups", level: 88, color: "bg-violet-500" },
  { name: "ITIL Service Management & Ticketing", level: 90, color: "bg-pink-500" },
  { name: "Cybersecurity & IAM Fundamentals", level: 85, color: "bg-red-500" },
];

const technologies = [
  { name: "AWS (EC2, S3, IAM, VPC)", icon: "☁️" },
  { name: "Azure Fundamentals", icon: "🌥️" },
  { name: "Python", icon: "🐍" },
  { name: "Bash", icon: "💻" },
  { name: "MikroTik RouterOS", icon: "📡" },
  { name: "FortiGate Firewall", icon: "🔥" },
  { name: "Cisco / CCNA", icon: "🌐" },
  { name: "Windows Server", icon: "🪟" },
  { name: "Linux", icon: "🐧" },
  { name: "Active Directory", icon: "🔐" },
  { name: "VPN (Site-to-Site / Remote)", icon: "🛡️" },
  { name: "Pi-hole / AdGuard", icon: "🚫" },
  { name: "Hyper-V / Virtualization", icon: "📦" },
  { name: "Backup & Disaster Recovery", icon: "💾" },
  { name: "ITIL / Ticketing", icon: "🎫" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "ERP Systems", icon: "🏭" },
  { name: "Citrix Workspace", icon: "🖥️" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core competencies and technologies I leverage to deliver reliable IT solutions
          </p>
        </motion.div>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 rounded-xl bg-card border border-border"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Tech Stack</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex items-center gap-2"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm font-medium text-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
