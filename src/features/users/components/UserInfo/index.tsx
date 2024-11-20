import { UserCircleIcon } from "@heroicons/react/16/solid";
import { UserContacts } from "../UserContacts";

interface UserInfoProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  avatarSize?: number;
}

export const UserInfo = ({
  name,
  username,
  email,
  phone,
  avatarSize = 40,
}: UserInfoProps) => {
  return (
    <div className="flex flex-col gap-2 text-green-500 items-center">
      <div className="">
        <div className="flex items-center gap-2">
          <UserCircleIcon width={avatarSize} height={avatarSize} />
          <p className="font-bold">{username}</p>
        </div>
        <p className="inline-block align-text-bottom ml-10 text-base">{name}</p>
      </div>

      <UserContacts email={email} phone={phone} />
    </div>
  );
};
