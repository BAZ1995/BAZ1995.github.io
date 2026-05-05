import { motion } from "framer-motion";
import { useGitHub } from "@/context/GitHubContext";

const AboutSection = () => {
  const { user, stats } = useGitHub();

  const allStats = [
    { value: user?.public_repos || 0, raw: user?.public_repos || 0, label: "Repositories", color: "text-violet-400" },
    { value: stats.totalContributions.toLocaleString(), raw: stats.totalContributions, label: "Contributions", color: "text-teal-400" },
    { value: user?.followers?.toLocaleString() || "0", raw: user?.followers || 0, label: "Followers", color: "text-yellow-400" },
    { value: stats.totalStars.toLocaleString(), raw: stats.totalStars, label: "Stars", color: "text-primary" },
  ];
  const displayStats = allStats.filter((s) => Number(s.raw) > 0);

  return (
    <section id="about" className="px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-muted-foreground text-lg text-center mb-12"
        >
          <p>
            Strategic IT Professional and AWS Certified Cloud Practitioner with over 5 years of experience managing enterprise infrastructure, distributed networks, and cloud environments. Skilled at bridging on-premise hardware with modern cloud architecture, automating routine tasks with Python, and maintaining 99.9% uptime for mission-critical systems.
          </p>
          <p className="text-base">
            Currently IT Officer (Infrastructure & Operations Lead) at Valentine Growers, architecting multi-site networks with FortiGate firewalls and MikroTik routers, deploying secure cloud-to-firewall VPNs, and automating monitoring workflows that reduced ticket resolution times by 30%.
          </p>
          <p className="text-sm text-primary">
            🌸 Beyond my technical expertise, I'm a passionate flower photographer specializing in capturing the intricate beauty of roses and premium export-grade florals.
          </p>
          <p className="text-sm mt-4">
            🟢 Open to: New opportunities | Consulting | Collaboration | Networking
          </p>
          {user?.location && (
            <p className="text-sm">📍 {user.location}</p>
          )}
        </motion.div>

        {displayStats.length > 0 && (
        <div className={`grid gap-4 grid-cols-2 ${displayStats.length >= 4 ? "md:grid-cols-4" : `md:grid-cols-${displayStats.length}`}`}>
          {displayStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <p className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
