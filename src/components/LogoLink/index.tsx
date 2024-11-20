import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface LogoLinkProps {
  isHomePage: boolean;
}

export const LogoLink = ({ isHomePage }: LogoLinkProps) => {
  const t = useTranslations("main.header");

  return (
    <div
      className={`text-xl font-bold p-4 ${
        isHomePage
          ? "text-white bg-green-100 bg-opacity-50"
          : "hover:text-white transition duration-300 ease-in-out"
      }`}
    >
      <Link href="/">{t("links.home")}</Link>
    </div>
  );
};
