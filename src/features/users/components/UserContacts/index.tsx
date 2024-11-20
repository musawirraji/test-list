import { Link } from "@/i18n/routing";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";

interface UserContactsProps {
  email: string;
  phone: string;
  emailClassName?: string;
  phoneClassName?: string;
}

export const UserContacts = ({
  email,
  phone,
  emailClassName = "hover:scale-110 transition-all duration-300 ease-in-out",
  phoneClassName = "hover:scale-110 transition-all duration-300 ease-in-out",
}: UserContactsProps) => {
  return (
    <div className="text-green-200 underline text-sm flex flex-col gap-4 items-center">
      <Link href={`mailto:${email}`}>
        <div className={`flex gap-2 items-center ${emailClassName}`}>
          <EnvelopeIcon width={20} height={20} />
          {email}
        </div>
      </Link>

      <Link href={`tel:+${phone}`}>
        <div className={`flex items-center gap-2 ${phoneClassName}`}>
          <PhoneIcon width={20} height={20} />+{phone}
        </div>
      </Link>
    </div>
  );
};
