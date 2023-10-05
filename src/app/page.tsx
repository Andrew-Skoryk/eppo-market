// import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow flex-col items-center justify-between p-24 bg-slate-500">
        Тут Буде мейн
      </main>
      <Footer />
    </div>
  );
}
