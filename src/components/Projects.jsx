import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-24">
      <motion.h2
        className="text-2xl font-semibold mb-12 text-sky-400 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">
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
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-sky-500/10 via-purple-500/10 to-pink-500/10
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
            "
          />

          <div className="relative z-10">
            <p className="text-xs text-sky-400 uppercase tracking-wide mb-2">
              Full-Stack Project
            </p>

            <a
              href="https://github.com/shimpi789/Airbnbclone"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                text-lg font-medium text-slate-100 mb-3
                cursor-pointer
                hover:text-sky-400
                transition
              "
            >
              StayGenie – Airbnb Clone
            </a>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              A MERN stack web application replicating Airbnb’s core features such
              as property listings, booking workflows, and user dashboards with
              secure authentication.
            </p>

            <ul className="text-slate-300 text-sm list-disc pl-4 mb-4 space-y-1">
              <li>Responsive UI using React and Tailwind CSS</li>
              <li>Global state management with Context API</li>
              <li>REST APIs with Node.js, Express, MongoDB</li>
              <li>JWT authentication and image uploads</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"].map(
                (tech) => (
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
                )
              )}
            </div>
          </div>
        </motion.div>

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
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        >
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-sky-500/10 via-purple-500/10 to-pink-500/10
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
            "
          />

          <div className="relative z-10">
            <p className="text-xs text-sky-400 uppercase tracking-wide mb-2">
              Hackathon Project
            </p>

            <a
              href="https://github.com/shimpi789/dis-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                text-lg font-medium text-slate-100 mb-3
                cursor-pointer
                hover:text-sky-400
                transition
              "
            >
              ResQNet – Disaster Information Platform
            </a>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              A real-time disaster awareness platform built during a GDG
              hackathon to provide alerts, resources, and location-based
              information.
            </p>

            <ul className="text-slate-300 text-sm list-disc pl-4 mb-4 space-y-1">
              <li>Multi-page React app with React Router</li>
              <li>Live maps using Leaflet.js & geolocation</li>
              <li>Real-time disaster updates via APIs</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              {["React", "React Router", "Tailwind", "Leaflet.js", "APIs"].map(
                (tech) => (
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
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
