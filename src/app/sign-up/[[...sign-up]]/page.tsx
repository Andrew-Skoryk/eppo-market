import { clerkAppearance } from "@/styles/clerk";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp appearance={clerkAppearance} />;
}
