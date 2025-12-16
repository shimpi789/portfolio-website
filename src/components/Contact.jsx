import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24">

      {/* Heading */}
      <motion.h2
        className="text-2xl font-semibold mb-6 text-sky-400 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Get in Touch
      </motion.h2>

      {/* Resume Button */}
      <motion.a
        href="/resume.pdf"
        target="_blank"
        className="
          w-fit flex items-center gap-2
          px-5 py-2 mb-8 rounded-md
          bg-[#030712] border border-sky-500/30
          text-sky-400 hover:bg-sky-500/20
          transition
        "
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -2 }}
      >
        <FileText size={18} />
        View Resume
      </motion.a>

      {/* Contact Links */}
      <motion.div
        className="flex flex-col gap-4 text-slate-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="mailto:shimpirajawat360@gmail.com"
          className="flex items-center gap-3 hover:text-sky-400 transition"
        >
          <Mail size={18} />
          shimpirajawat360@gmail.com
        </a>

        <a
          href="https://github.com/shimpi789/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-sky-400 transition"
        >
          <Github size={18} />
          github.com/shimpi789
        </a>

        <a
          href="https://www.linkedin.com/in/shimpi-rajawat-485586317/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-sky-400 transition"
        >
          <Linkedin size={18} />
          linkedin.com/in/shimpi-rajawat-485586317
        </a>
      </motion.div>

    </section>
  );
}
