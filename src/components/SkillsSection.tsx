import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    accent: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    items: ["AWS (EC2, S3, IAM, VPC)", "Azure Fundamentals", "Hyper-V", "Virtualization", "Disaster Recovery", "Database Backups"],
  },
  {
    title: "Networking & Security",
    accent: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    items: ["MikroTik RouterOS", "FortiGate Firewall", "Cisco / CCNA", "Site-to-Site VPN", "Remote VPN", "Pi-hole / AdGuard", "Cybersecurity", "IAM"],
  },
  {
    title: "Systems Administration",
    accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    items: ["Windows Server", "Active Directory (RBAC)", "Linux Administration", "Citrix Workspace", "ERP Systems"],
  },
  {
    title: "Scripting & Automation",
    accent: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
    items: ["Python", "Bash", "Git & GitHub", "Monitoring Workflows"],
  },
  {
    title: "Service Management",
    accent: "text-pink-400 border-pink-500/30 bg-pink-500/10",
    items: ["ITIL", "Ticketing Systems", "Incident Response", "SLA Management"],
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1 text-sm rounded-full border ${group.accent}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
