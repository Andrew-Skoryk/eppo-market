import type { Metadata } from "next";
import { UserProfile } from "@clerk/nextjs/app-beta";

export const metadata: Metadata = {
  title: "Особистий кабінет",
  description: "Ця сторінка містить інтерфейс керування особистим профілем",
};

async function Profile() {
  return (
    <section className="flex flex-col gap-4">
      <UserProfile />
      <button>Відкрити історію замовлень</button>
    </section>
  );
}

export default Profile;
