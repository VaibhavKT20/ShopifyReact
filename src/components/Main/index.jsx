import Features from "../Features";
import Hero from "../Hero";

export default function Main() {
  return (
    <main className="bg-gradient-to-b from-tertiary-300 via-tertiary-400 to-tertiary-300 p-8 lg:p-16">
      <Hero />
      <Features />
    </main>
  );
}
