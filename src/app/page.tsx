// import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500">
        Тут Буде мейн
      </main>
    </div>
  );
}
