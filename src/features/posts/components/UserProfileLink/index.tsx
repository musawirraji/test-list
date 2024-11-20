import { Link } from "@/i18n/routing";
import { UserIcon } from "../../../../../public/icons";

interface UserProfileLinkProps {
  userId: number;
  username: string;
  name?: string;
}

export const UserProfileLink = ({
  userId,
  username,
  name,
}: UserProfileLinkProps) => {
  return (
    <Link href={`/users/${userId}`} className="w-48">
      <div className="flex flex-col text-green-500 rounded-md hover:bg-green-50 bg-opacity-30 hover:text-white transition duration-300 ease-in-out w-48">
        <div className="flex items-center gap-2">
          <UserIcon />
          <p className="inline-block align-text-bottom pt-1">{username}</p>
        </div>
        {name && <p className="text-sm ml-8">{name}</p>}
      </div>
    </Link>
  );
};
