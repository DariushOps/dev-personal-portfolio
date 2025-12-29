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
      <div className="relative container mx-auto z-10 px-6">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium uppercase tracking-wider">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the feature,{" "}
              <span className="font-serif italic text-white font-normal">
                {" "}
                one component at time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a frontend developer with a strong focus on modern frontend
                development, passionate about building real-world products with
                clean architecture and great user experience. I enjoy turning
                complex ideas into reliable, scalable web applications.
              </p>
              <p>
                I primarily work with React, Next.js, and TypeScript, and I have
                hands-on experience building production-ready
                applications—ranging from responsive dashboards to full-featured
                platforms with authentication, data management, and performance
                optimization in mind.
              </p>
              <p>
                Beyond day-to-day development, I actively explore new tools and
                patterns, improve my understanding of system design, and refine
                my skills through continuous learning, side projects, and
                open-source contributions.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
