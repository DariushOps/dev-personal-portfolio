import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Frontend Architecture",
    description:
      "Building clean, scalable, and maintainable frontend architectures with React and Next.js.",
  },
  {
    icon: Rocket,
    title: "High-Performance UI",
    description:
      "Optimizing rendering, state management, and data fetching for fast, smooth user experiences.",
  },
  {
    icon: Users,
    title: "User-Centered Development",
    description:
      "Creating intuitive, accessible interfaces with a strong focus on UX and real user needs.",
  },
  {
    icon: Lightbulb,
    title: "Modern Frontend Stack",
    description:
      "Working with modern tools like Next.js, TypeScript, Tailwind CSS, and TanStack Query.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 overflow-hidden relative">
      <div>
        <div>
          <div>
            <span>About Me</span>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
