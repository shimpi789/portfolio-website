import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "StayGenie – Airbnb Clone",
      type: "Full-Stack Project",
      link: "https://github.com/shimpi789/Airbnbclone",
      desc: "A MERN stack web application replicating Airbnb’s core features such as property listings, booking workflows, and user dashboards.",
      points: [
        "Responsive UI using React and Tailwind CSS",
        "Global state management with Context API",
        "REST APIs with Node.js, Express, MongoDB",
        "JWT authentication and image uploads"
      ],
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"]
    },
    {
      title: "ResQNet – Disaster Information Platform",
      type: "Hackathon Project",
      link: "https://github.com/shimpi789/Dis-Frontendd",
      desc: "A real-time disaster awareness platform providing alerts, resources, and location-based information.",
      points: [
        "Multi-page React app with React Router",
        "Live maps using Leaflet.js & geolocation",
        "Real-time disaster updates via APIs"
      ],
      tech: ["React", "React Router", "Tailwind", "Leaflet.js", "APIs"]
    },
    {
      title: "Chatly – Real-Time Chat Application",
      type: "Full-Stack Project",
      link: "https://github.com/shimpi789/chat-app",
      desc: "A WhatsApp-style real-time chat application with secure authentication, real-time messaging, and image sharing.",
      points: [
        "JWT-based authentication and protected routes",
        "Real-time 1:1 messaging using Socket.IO",
        "Online/offline user presence tracking",
        "Image sharing via Cloudinary",
        "State management with Redux Toolkit"
      ],
      tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Cloudinary"]
    }
  ];

  const ProjectCard = ({ project, delay }) => (
    <motion.div
      className="
        group relative
        p-6 rounded-xl
        bg-neutral-800
        border border-neutral-700
        overflow-hidden
        transition
        flex flex-col gap-4 h-full
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
    >
      <div className="
        absolute inset-0
        bg-gradient-to-r
        from-sky-500/10 via-purple-500/10 to-pink-500/10
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500 blur-xl
      " />

      <div className="relative z-10 flex flex-col gap-4">

        <p className="text-xs text-sky-400 uppercase tracking-wide">
          {project.type}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-slate-100 hover:text-sky-400 transition"
        >
          {project.title}
        </a>

        <p className="text-slate-300 text-sm leading-relaxed">
          {project.desc}
        </p>

        <ul className="text-slate-300 text-sm list-disc pl-4 space-y-1">
          {project.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );

  return (
    <section className="py-24">
      <motion.h2
        className="text-2xl font-semibold mb-12 text-sky-400 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* ✅ CUSTOM LAYOUT */}
      <div className="space-y-6">

        {/* Top row */}
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard project={projects[0]} delay={0} />
          <ProjectCard project={projects[1]} delay={0.05} />
        </div>

        {/* Bottom center */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <ProjectCard project={projects[2]} delay={0.1} />
          </div>
        </div>

      </div>
    </section>
  );
}