import SignIn from "@/app/(auth)/components/sign-in";
import SignOut from "@/app/(auth)/components/sign-out";
import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
import { SearchDialog } from "./SearchDialog";

const Header = async () => {
  const session = await auth();
  console.log(session);
  return (
    <header>
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MoviClub
        </Link>
        <div className="flex space-x-4">
          {session ? (
            <>
              <Link href="/search">Search</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/about">About</Link>
              <SearchDialog />
              <SignOut />
            </>
          ) : (
            <>
              <Link href="/about">About</Link>
              <SearchDialog />
              <SignIn />
            </>
          )}
        </div>
      </nav>
      <hr className="border-gray-500 border-1 mb-4 mt-4" />
    </header>
  );
};

export default Header;
