"use client";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export const ScrollToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-green-100 text-white p-3 rounded-full shadow-lg hover:bg-green-300 hover:scale-110 transition duration-300 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      ↑
    </button>
  );
};
