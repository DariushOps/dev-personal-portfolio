const projects = [
  {
    title: "Watch Store",
    description: `A modern React website that lets users explore and shop luxury watches with smooth interactions, responsive layouts.`,
    image: "/projects/project1.png",
    tags: ["React", "Tailwind", "Redux", "Framer Motion"],
    Github: "https://github.com/CoraxMuninn/dow-watch-store",
  },
  {
    title: "Inventory Management App",
    description: `An inventory management app for tracking products, monitoring stock levels, and visualizing key metrics.`,
    image: "/projects/project2.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    Github: "https://github.com/CoraxMuninn/inventory-management-app",
  },
  {
    title: "Trello Clone",
    description: `A modern Trello-inspired application that allows users to manage boards, lists, and cards.`,
    image: "/projects/project3.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "ShadCN/ui"],
    Github: "https://github.com/CoraxMuninn/trello-clone",
  },
  {
    title: "Food Order",
    description: `A React-based food ordering app with dynamic cart management and multi-step checkout.`,
    image: "/projects/project4.png",
    tags: ["React", "FireBase Database", "Redux"],
    Github: "https://github.com/CoraxMuninn/react-food-order-app",
  },
];

export default function Projects() {
  return (
    <section id="about" className="py-32 overflow-hidden relative">
      <div className="relative container mx-auto z-10 px-6"></div>
    </section>
  );
}
