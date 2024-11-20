"use client";

import { useLocaleSwitcher } from "@/hooks/useLocaleSwitcher";
import Dropdown from "../Dropdown";

export const LocalSwitcher = () => {
  const { localActive, translatedLanguages, onSelectChange } =
    useLocaleSwitcher();

  return (
    <label className="flex flex-row items-center gap-2">
      <Dropdown
        items={translatedLanguages}
        defaultValue={localActive}
        onSelect={onSelectChange}
        buttonText={localActive.toUpperCase()}
      />
    </label>
  );
};
