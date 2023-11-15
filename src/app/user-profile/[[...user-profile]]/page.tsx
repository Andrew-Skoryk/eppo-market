"use client"
// import type { Metadata } from "next";

import { UserProfile } from "@clerk/nextjs";
import { Tabs, Tab } from "@nextui-org/tabs";
import { clerkAppearance } from "@/styles/clerk";

// export const metadata: Metadata = {
//   title: "Особистий кабінет",
//   description: "Ця сторінка містить інтерфейс керування особистим профілем",
// };

function Profile() {
  return (
    <section className="flex flex-col gap-4">
      <Tabs size="lg" aria-label="account tabs" color="primary" variant="bordered">
        <Tab key="account" title="Обліковий запис" href="/photos">
          <UserProfile
            path="/user-profile"
            routing="path"
            appearance={clerkAppearance}
          />
        </Tab>
        <Tab key="orders" title="Історія замовлень" href="/orders">
          <button>Відкрити історію замовлень</button>
        </Tab>
      </Tabs>
    </section>
  );
}

export default Profile;
