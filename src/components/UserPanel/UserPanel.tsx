"use client";

import {
  UserButton,
  SignedIn,
  SignedOut,
  ClerkLoading,
  ClerkLoaded,
} from "@clerk/nextjs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingBasket, User2 } from "lucide-react";
import { Spinner } from "@nextui-org/spinner";
import NavLink from "../NavLink";
import { AppDispatch } from "../../../redux/store";
import { loadCartItems } from "../../../redux/slices/cartSlice";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../../redux/selectors/cartSelectors";
import { getMoneyFormat } from "@/lib/utils";
import { clerkAppearance } from "@/styles/clerk";
import { Badge } from "@nextui-org/badge";

const UserPanel = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartItems());
  }, [dispatch]);

  const totalPrice = getMoneyFormat(useSelector(selectCartTotalPrice));
  const totalItemsInCart = useSelector(selectCartItems).length;

  return (
    <div className="flex items-center space-x-4 min-w-[152px]">
      <NavLink href="/cart">
        <div className="flex flex-col items-center w-14">
          <Badge
            content={totalItemsInCart}
            color="primary"
            size="sm"
            shape="rectangle"
            isInvisible={!totalItemsInCart}
            disableOutline
          >
            <ShoppingBasket
              size={30}
              strokeWidth={2}
              absoluteStrokeWidth={true}
            />
          </Badge>
          <span className="sr-only">Корзина</span>
          <span className="text-sm bg-amber-200 rounded-md py-0.5 px-1">
            {totalPrice}
          </span>
        </div>
      </NavLink>

      <ClerkLoading key="loading">
        <Spinner className="" size="lg" />
      </ClerkLoading>

      <ClerkLoaded key="loaded">
        <SignedIn>
          <UserButton
            userProfileMode="navigation"
            userProfileUrl="/user-profile"
            afterSignOutUrl="/"
            appearance={{
              ...clerkAppearance,
              elements: { userButtonAvatarBox: "h-12 w-12" },
            }}
          />
          <span className="sr-only">Профіль</span>
        </SignedIn>

        <SignedOut>
          {<NavLink href="/sign-in">{<User2 size={30} />}</NavLink>}
          <span className="sr-only">Профіль</span>
        </SignedOut>
      </ClerkLoaded>
    </div>
  );
};

export default UserPanel;
