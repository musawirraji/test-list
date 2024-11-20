import { usePostsContext, useUsersContext } from "@/hooks";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export const useUserData = () => {
  const { getUserPosts } = usePostsContext();
  const { getUserData } = useUsersContext();

  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const currentId = useMemo(() => {
    const id = pathname?.split("/").at(-1);
    return id ? +id : undefined;
  }, [pathname]);

  const userPosts = useMemo(
    () => (currentId ? getUserPosts(currentId) : undefined),
    [currentId, getUserPosts]
  );

  const user = useMemo(
    () => (currentId ? getUserData(currentId) : undefined),
    [currentId, getUserData]
  );

  useEffect(() => {
    if (currentId || user) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
  }, [currentId, user]);

  return { isLoading, user, userPosts };
};
