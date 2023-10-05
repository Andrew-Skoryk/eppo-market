import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import NavLink from "../NavLink";

const UserPanel = () => {
  return (
    <div className="flex space-x-4 text-lime-700">
      <NavLink href="/cart">🛒</NavLink>
      <a href="/cart" className="hover:text-gray-300">
        <span className="sr-only">Корзина</span>
      </a>

      <SignedIn>
        <UserButton
          userProfileMode="navigation"
          userProfileUrl="/profile"
          afterSignOutUrl="/"
          appearance={{
            elements: { userButtonAvatarBox: "h-50 w-50" },
          }}
        />
      </SignedIn>

      <SignedOut>{<NavLink href="/sign-in">Log in</NavLink>}</SignedOut>
    </div>
  );
};

export default UserPanel;
