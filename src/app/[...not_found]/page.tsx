import type { Metadata } from "next";
import { XOctagon } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
};

function notFound() {
  return (
    <section className="flex justify-center gap-2 py-16 text-red-800">
      <XOctagon />
      <h2 className="text-xl">Oops! Page not found...</h2>
    </section>
  );
}

export default notFound;
