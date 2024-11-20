"use client";
import { useDropdown } from "@/hooks";
import { ReactNode } from "react";

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  items: DropdownItem[];
  onSelect: (value: string) => void;
  buttonText?: string;
  buttonIcon?: ReactNode;
  defaultValue?: string;
}

export default function Dropdown({
  items,
  onSelect,
  buttonText,
  buttonIcon,
  defaultValue,
}: DropdownProps) {
  const {
    isOpen,
    selectedValue,
    dropdownRef,
    handleToggleDropdown,
    handleSelect,
  } = useDropdown({ defaultValue, onSelect });

  return (
    <div className="relative flex text-left" ref={dropdownRef}>
      <button
        type="button"
        className="group flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-green-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={handleToggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {buttonText}
        {buttonIcon}
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 top-7 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none transition ease-in-out duration-200 transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="rounded-md" role="none">
          {items.map((item) => (
            <button
              key={item.value}
              className={`block w-full text-left px-4 rounded-md py-2 text-sm ${
                selectedValue === item.value
                  ? "bg-green-200 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleSelect(item)}
              role="menuitem"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
