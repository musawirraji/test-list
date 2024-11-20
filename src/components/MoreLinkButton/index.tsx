import { Link } from "@/i18n/routing";
import { ArrowRightIcon } from "../../../public/icons";
interface MoreLinkButton {
  href: string;
  text: string;
}

export const MoreLinkButton = ({ href, text }: MoreLinkButton) => {
  return (
    <Link href={href} className="w-48">
      <div className="flex justify-center  p-2 rounded-md text-green-800 font-semibold text-sm hover:bg-green-50 hover:text-white transition duration-300 ease-in-out items-center">
        {text}
        <ArrowRightIcon />
      </div>
    </Link>
  );
};
