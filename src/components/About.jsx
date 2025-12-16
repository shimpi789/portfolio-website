

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24">
      {/* Heading */}
      <motion.h2
        className="text-2xl font-semibold mb-10 text-sky-400 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        About
      </motion.h2>

      {/* Content */}
      <motion.p
        className="text-slate-300 leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      >
       I’m a third-year Computer Science Engineering student at Jabalpur Engineering College with a strong interest in full-stack web development. 
       I build clean, responsive web applications using React and develop backend functionality with Node.js, Express, and MongoDB. 
       Through full-stack projects and hackathons, I’ve focused on solving real-world problems and am currently seeking internship opportunities to learn and grow as a developer.

      </motion.p>
    </section>
  );
}
