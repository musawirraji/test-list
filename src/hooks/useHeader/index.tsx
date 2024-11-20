import { useRouter } from "@/i18n/routing";
import { usePathname } from "next/navigation";

export const useHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSelectRoute = (route: string) => {
    if (route) {
      router.push(`/${route}`);
    }
  };

  const isHomePage = () => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.length === 0 || segments.length === 1;
  };

  const selectedValue = (link: string) => pathname.includes(link);

  return {
    handleSelectRoute,
    isHomePage,
    selectedValue,
  };
};
