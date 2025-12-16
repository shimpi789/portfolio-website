import { motion } from "framer-motion";
import { Github, Linkedin, Mail,FileText  } from "lucide-react";
import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="pt-20 pb-24">
      
      <div className="relative flex flex-col gap-3">

        <div className="absolute top-0 right-0 flex gap-2">

          <motion.a
            href="https://github.com/shimpi789"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-9 h-9 flex items-center justify-center
              rounded-lg
              border border-sky-500/30
              text-sky-400
              bg-[#030712]
              hover:bg-sky-500/10
              transition
            "
            whileHover={{ y: -2 }}
          >
            <Github size={16} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/shimpi-rajawat-485586317/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-9 h-9 flex items-center justify-center
              rounded-lg
              border border-sky-500/30
              text-sky-400
              bg-[#030712]
              hover:bg-sky-500/10
              transition
            "
            whileHover={{ y: -2 }}
          >
            <Linkedin size={16} />
          </motion.a>

          <motion.a
            href="mailto:shimpirajawat360@gmail.com"
            className="
              w-9 h-9 flex items-center justify-center
              rounded-lg
              border border-sky-500/30
              text-sky-400
              bg-[#030712]
              hover:bg-sky-500/10
              transition
            "
            whileHover={{ y: -2 }}
          >
            <Mail size={16} />
          </motion.a>

        </div>

       
        <motion.img
          src={profile}
          alt="Shimpi Rajawat"
          className="
            w-40 h-40
            rounded-xl
            object-cover
            border border-white/10
            shadow-lg shadow-black/30
          "
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        
        <motion.h1
          className="text-2xl md:text-4xl font-medium"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Hi, I’m Shimpi
        </motion.h1>

        <motion.p
          className="text-slate-300 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Full-Stack Web Developer (MERN Stack)
        </motion.p>

        <motion.p
          className="text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          React • Node.js • Express • MongoDB
        </motion.p>

        
        <motion.p
          className="text-slate-300 leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Computer Science Engineering student building responsive and
          user-focused web applications through real-world projects
          and hackathons.
        </motion.p>

       
        <motion.a
          href="/resume.pdf"
          target="_blank"
          className="
            w-fit flex items-center gap-2
            px-5 py-2 rounded-md
            bg-[#030712] border border-sky-500/30
            text-sky-400 hover:bg-sky-500/20
            transition
          "
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -2 }}
        >
          <FileText size={18} />
          View Resume
        </motion.a>

      </div>
    </section>
  );
}
