import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "React Router",
        "Redux",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "JWT Authentication",
      ],
    },
    {
      title: "Tools & Concepts",
      skills: [
        "Git & GitHub",
        "Context API",
        "Multer",
        "OOPs",
        "DSA (C++)",
        "Figma",
      ],
    },
  ];

  return (
    <section className="py-24">
     <h2 className="
  text-2xl font-semibold mb-10
  text-sky-400 tracking-wide
">
  Core Technical Skills
</h2>


      <div className="space-y-10">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: groupIndex * 0.15,
              ease: "easeOut",
            }}
          >
           
            <h3 className="text-lg font-medium mb-4 text-neutral-300">
              {group.title}
            </h3>

         
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className="
                    px-4 py-2 rounded-full
                    bg-neutral-800
                    border border-neutral-700
                    text-sm
                  "
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: skillIndex * 0.05,
                  }}
                  whileHover={{ y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
