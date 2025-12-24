import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
      className="mb-10"
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-400 md:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
