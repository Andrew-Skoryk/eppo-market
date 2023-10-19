import type { Metadata } from "next";
import { UserProfile } from "@clerk/nextjs/app-beta";
import { clerkAppearance } from "@/styles/clerk";

export const metadata: Metadata = {
  title: "Особистий кабінет",
  description: "Ця сторінка містить інтерфейс керування особистим профілем",
};

async function Profile() {
  return (
    <section className="flex flex-col gap-4">
      <UserProfile
        path="/user-profile"
        routing="path"
        appearance={clerkAppearance}
      />
      <button>Відкрити історію замовлень</button>
    </section>
  );
}

export default Profile;
