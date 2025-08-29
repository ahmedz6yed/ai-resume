import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMate" },
    { name: "description", content: "Get a real feedback for ur CV" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
      <Navbar />
      <section className="main-section">
        <h1 className="text-4xl font-bold mb-4">Welcome to ResuMate</h1>
        <p className="text-lg text-gray-700">Get real feedback for your CV</p>
      </section>
    </main>
  );
}
