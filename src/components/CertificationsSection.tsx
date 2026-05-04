import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "☁️",
    color: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-500/30",
    file: "/certifications/AWS_Certified_Cloud_Practitioner.pdf",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    icon: "🌩️",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    file: "/certifications/Microsoft_AZ-900_Certificate.pdf",
  },
  {
    name: "AZ-900 Exam Result",
    issuer: "Microsoft",
    icon: "📄",
    color: "from-violet-500/20 to-indigo-500/10",
    border: "border-violet-500/30",
    file: "/certifications/Microsoft_AZ-900_Result.pdf",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials validating my cloud and IT expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`group relative p-6 rounded-xl bg-gradient-to-br ${cert.color} border ${cert.border} hover:border-primary/50 transition-all duration-300 block`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{cert.icon}</div>
                <Award className="w-6 h-6 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                View Certificate
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;