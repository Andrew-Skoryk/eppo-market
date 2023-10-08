import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { ShoppingBasket, User2 } from "lucide-react";
import NavLink from "../NavLink";

const UserPanel = () => {
  return (
    <div className="flex items-center space-x-4">
      <NavLink href="/cart">
        <ShoppingBasket
          size={35}
          strokeWidth={2.3}
          absoluteStrokeWidth={true}
        />
        <span className="sr-only">Корзина</span>
      </NavLink>

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

      <SignedOut>{<NavLink href="/sign-in">{<User2 />}</NavLink>}</SignedOut>
    </div>
  );
};

export default UserPanel;
