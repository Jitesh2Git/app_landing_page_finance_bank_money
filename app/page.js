import {
  Advantages,
  Download,
  FAQ,
  Features,
  Footer,
  Header,
  Hero,
  Testimonial,
} from "@/components";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <Header />
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <FAQ />
      <Download />
      <Footer />
    </main>
  );
}
