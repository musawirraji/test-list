import { MoreLinkButton } from "@/components";
import { User } from "@/types";
import { useTranslations } from "next-intl";
import { UserContacts } from "../UserContacts";
import { UserHeader } from "../UserHeader";

interface UserCardProps {
  user: User;
}
export const UserCard = ({ user }: UserCardProps) => {
  const t = useTranslations("pages.users");

  return (
    <div className="flex flex-col border border-green-100 rounded-md p-4 bg-white justify-between hover:scale-105 transition duration-300 ease-in-out">
      <div className="flex flex-col items-center gap-4 text-green-500">
        <UserHeader name={user.name} />

        <UserContacts email={user.email} phone={user.phone} />

        <MoreLinkButton href={`/users/${user.id}`} text={t("viewPosts")} />
      </div>
    </div>
  );
};
