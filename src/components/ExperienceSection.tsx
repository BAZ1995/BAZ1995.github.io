import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "IT Officer (Infrastructure & Operations Lead)",
    company: "Valentine Growers Ltd",
    period: "Nov 2024 – Present",
    location: "Multi-Site / Nairobi, Kenya",
    points: [
      "Architected and maintained stable multi-site network infrastructure with FortiGate firewalls and MikroTik routers, deploying secure cloud-to-firewall VPNs for 100% reliable remote connectivity.",
      "Developed Python automation scripts that streamlined system monitoring workflows, reducing manual intervention and ticket resolution times by 30%.",
      "Spearheaded Windows system optimization across enterprise endpoints, reducing resource bloat and extending hardware lifecycles.",
      "Executed disaster recovery plans and managed daily enterprise database backups, maintaining 99.9% uptime for critical operations.",
    ],
  },
  {
    role: "IT Support & Systems Administrator",
    company: "Savanna Flowers PLC",
    period: "Sep 2022 – Oct 2024",
    location: "Kenya",
    points: [
      "Administered highly available ERP platforms and tracking databases, achieving zero operational downtime during peak logistics seasons.",
      "Managed Active Directory environments with strict role-based access controls (RBAC), streamlining user provisioning organization-wide.",
      "Coordinated continuous hardware upgrades and managed the full lifecycle of networked endpoints across 5+ operational departments.",
    ],
  },
  {
    role: "ICT Officer (Technical Support)",
    company: "Iguhu Subcounty Hospital",
    period: "Jul 2022 – Sep 2022",
    location: "Kenya",
    points: [
      "Secured access and maintained the integrity of high-volume public health databases (HMIS), ensuring 100% compliance with data protection and medical confidentiality regulations.",
      "Diagnosed and resolved complex LAN and hardware faults rapidly to support mission-critical clinical service delivery.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            5+ years building and supporting reliable IT infrastructure across multi-site environments.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary text-sm mb-3">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    {exp.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
