import { clerkAppearance } from "@/styles/clerk";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn appearance={clerkAppearance} />;
}
