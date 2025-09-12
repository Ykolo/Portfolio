import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-4xl font-bold">Welcome to Luxe</h1>
        <p className="mt-4">Your one-stop solution for all things luxury.</p>
      </main>
      <Footer />
    </>
  );
}
