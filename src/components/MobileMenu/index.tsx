import { ROUTS_KEYS } from "@/constants";
import { MobileMenuIcon } from "../../../public/icons";
import Dropdown from "../Dropdown";
import { LocalSwitcher } from "../LocalSwitcher";

interface MobileMenuProps {
  handleSelectRoute: (route: string) => void;
}

export const MobileMenu = ({ handleSelectRoute }: MobileMenuProps) => {
  return (
    <div className="sm:hidden relative flex gap-2 text-left py-4">
      <LocalSwitcher />
      <Dropdown
        items={ROUTS_KEYS}
        buttonIcon={<MobileMenuIcon />}
        onSelect={handleSelectRoute}
      />
    </div>
  );
};
