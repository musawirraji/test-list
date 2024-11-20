import { useTranslations } from "next-intl";

export const NoUser = () => {
  const t = useTranslations("pages.users");

  return (
    <div className="p-10 lg:p-12">
      <div className="bg-white p-8 text-xl font-bold rounded-md h-full text-center">
        <p className="text-red-500">{t("userNotFound")}</p>
      </div>
    </div>
  );
};
