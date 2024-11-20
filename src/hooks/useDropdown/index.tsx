import { useEffect, useRef, useState } from "react";

interface DropdownItem {
  label: string;
  value: string;
}

interface UseDropdownProps {
  defaultValue?: string;
  onSelect: (value: string) => void;
}

export const useDropdown = ({ defaultValue, onSelect }: UseDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    defaultValue || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item: DropdownItem) => {
    onSelect(item.value);
    setSelectedValue(item.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return {
    isOpen,
    selectedValue,
    dropdownRef,
    handleToggleDropdown,
    handleSelect,
  };
};
