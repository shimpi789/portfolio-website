import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-24">
      {/* Heading */}
      <motion.h2
        className="text-2xl font-semibold mb-12 text-sky-400 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="space-y-6">

        {/* Internship Card */}
        <motion.div
          className="
            group relative
            p-6 rounded-xl
            bg-neutral-800
            border border-neutral-700
            overflow-hidden
            transition
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            {/* Role */}
            <h3 className="text-lg font-medium text-slate-100">
              Web Development Intern
            </h3>

            {/* Company + Duration */}
            <p className="text-sm text-sky-400 mb-2">
              Zome Agency • Dec 2025 – Jan 2026
            </p>

            {/* Description */}
            <p className="text-slate-300 text-sm mb-4">
              Contributed to building a scalable service marketplace backend,
              focusing on secure APIs, system design, and administrative analytics.
            </p>

            {/* Bullet Points */}
            <ul className="text-slate-300 text-sm list-disc pl-4 space-y-1">
              <li>Developed 15+ RESTful APIs using Node.js, Express.js, and PostgreSQL</li>
              <li>Designed a complaint-driven Trust & Safety system with moderation workflows</li>
              <li>Implemented RBAC and JWT authentication for secure role-based access</li>
              <li>Built normalized relational schema with Knex migrations and complex joins</li>
              <li>Built analytics APIs to track repeat offenders and complaint distribution</li>
              <li>Deployed backend on Render with production-ready configurations</li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Knex.js",
                "JWT",
                "RBAC",
                "REST APIs",
                "Render",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    text-xs px-2 py-1 rounded-md
                    bg-white/5 text-slate-300
                    border border-white/10
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ✅ Certificate Button (NEW) */}
            <div className="mt-4">
              <a
                href="/certificate.png"   // 👈 file public folder me daalna
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  text-xs px-3 py-1.5
                  rounded-md
                  bg-sky-500/10 text-sky-400
                  border border-sky-500/20
                  hover:bg-sky-500/20
                  transition
                "
              >
                View Certificate
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}