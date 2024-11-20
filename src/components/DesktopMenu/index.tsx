import { ROUTS_KEYS } from "@/constants";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { LocalSwitcher } from "../LocalSwitcher";

interface DesktopMenuProps {
  selectedValue: (link: string) => boolean;
}

export const DesktopMenu = ({ selectedValue }: DesktopMenuProps) => {
  const t = useTranslations("main.header");

  return (
    <div className="hidden sm:flex gap-10 justify-end items-center w-[70%]">
      {ROUTS_KEYS.map((route) => (
        <Link key={route.value} href={`/${route.value}`}>
          <div
            className={`p-4 font-semibold ${
              selectedValue(route.value)
                ? "text-white bg-green-100 bg-opacity-50"
                : "hover:text-white transition duration-300 ease-in-out"
            }`}
          >
            {t(`links.${route.value}`)}
          </div>
        </Link>
      ))}
      <LocalSwitcher />
    </div>
  );
};
