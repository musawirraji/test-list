"use client";
import { useHeader } from "@/hooks";
import { DesktopMenu } from "../DesktopMenu";
import { LogoLink } from "../LogoLink";
import { MobileMenu } from "../MobileMenu";

export default function Header() {
  const { handleSelectRoute, isHomePage, selectedValue } = useHeader();

  return (
    <header className=" border-gray-100 bg-green-50">
      <nav className=" flex justify-between px-4 items-center">
        <LogoLink isHomePage={isHomePage()} />

        <MobileMenu handleSelectRoute={handleSelectRoute} />

        <DesktopMenu selectedValue={selectedValue} />
      </nav>
    </header>
  );
}
