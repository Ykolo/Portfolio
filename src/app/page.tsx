import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold">Welcome to Luxe</h1>
      <p className="mt-4">Your one-stop solution for all things luxury.</p>
      <Image src="/luxury-image.jpg" alt="Luxury" width={500} height={300} />
    </main>
  );
}
