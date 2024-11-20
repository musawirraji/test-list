import { LANGUAGES } from "@/constants";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export const useLocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();
  const t = useTranslations("main.header");

  const translatedLanguages = LANGUAGES.map((lang) => ({
    ...lang,
    label: t(lang.label),
  }));

  const onSelectChange = (value: string) => {
    const nextLocale = value;
    const newPathname = `/${nextLocale}${pathname.replace(
      `/${localActive}`,
      ""
    )}`;

    startTransition(() => {
      router.replace(newPathname);
    });
  };

  return {
    isPending,
    localActive,
    translatedLanguages,
    onSelectChange,
  };
};
