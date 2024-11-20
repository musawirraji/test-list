import { UserCircleIcon } from "@heroicons/react/16/solid";

interface UserHeaderProps {
  name: string;
}

export const UserHeader = ({ name }: UserHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-4 text-green-500">
      <UserCircleIcon width={40} height={40} />
      <p className="font-bold">{name}</p>
    </div>
  );
};
