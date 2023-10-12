"use client";

import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { ShoppingBasket, User2 } from "lucide-react";
import NavLink from "../NavLink";
import { useDispatch, useSelector } from "react-redux";
import { selectCartTotalPrice } from "../../../redux/selectors/cartSelectors";
import { useEffect } from "react";
import { loadCartItems } from "../../../redux/slices/cartSlice";
import { AppDispatch } from "../../../redux/store";
import { getMoneyFormat } from "@/lib/utils";

const UserPanel = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartItems());
  }, [dispatch]);

  const totalPrice = getMoneyFormat(useSelector(selectCartTotalPrice));

  return (
    <div className="flex items-center space-x-4">
      <NavLink href="/cart">
        <div className="flex flex-col items-center w-14">
          <ShoppingBasket
            size={30}
            strokeWidth={2}
            absoluteStrokeWidth={true}
          />
          <span className="sr-only">Корзина</span>
          <span className="text-sm bg-amber-200 rounded-md py-0.5 px-1">
            {totalPrice}
          </span>
        </div>
      </NavLink>

      <SignedIn>
        <UserButton
          userProfileMode="navigation"
          userProfileUrl="/profile"
          afterSignOutUrl="/"
          appearance={{
            elements: { userButtonAvatarBox: "h-12 w-12" },
          }}
        />
      </SignedIn>

      <SignedOut>
        {<NavLink href="/sign-in">{<User2 size={30} />}</NavLink>}
      </SignedOut>
    </div>
  );
};

export default UserPanel;
