import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-12 bg-background">
        <h1 className="text-4xl font-bold">Welcome </h1>
      </main>
      <Footer />
    </div>
  );
}
