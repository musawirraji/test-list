import { useTranslations } from "next-intl";

export const NoPost = () => {
  const t = useTranslations("pages.posts");

  return (
    <div className="p-10 lg:p-12 h-[calc(100dvh-56px)]">
      <div className="bg-white p-8 text-xl font-bold rounded-md h-full">
        {t("noPostWithId")}
      </div>
    </div>
  );
};
