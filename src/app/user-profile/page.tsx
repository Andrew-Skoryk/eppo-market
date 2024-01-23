import type { Metadata } from "next";

import { UserProfile } from "@clerk/nextjs";
import { clerkAppearance } from "@/styles/clerk";

export const metadata: Metadata = {
  title: "Особистий кабінет",
  description: "Ця сторінка містить інтерфейс керування особистим профілем",
};

function Profile() {
  return (
    <UserProfile
      path="/user-profile"
      routing="path"
      appearance={clerkAppearance}
    />
  );
}

export default Profile;
