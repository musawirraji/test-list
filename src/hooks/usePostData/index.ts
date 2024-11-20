import { usePostsContext } from "@/hooks";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export const usePostData = () => {
  const { getPostData, getUserPosts } = usePostsContext();
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);

  const currentId = useMemo(() => {
    const id = pathname?.split("/").at(-1);
    return id ? +id : undefined;
  }, [pathname]);

  const post = useMemo(
    () => (currentId ? getPostData(currentId) : undefined),
    [currentId, getPostData]
  );

  const userPosts = useMemo(
    () => (post && post?.userId ? getUserPosts(post?.userId) : undefined),
    [post, getUserPosts]
  );

  useEffect(() => {
    if (currentId || post) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
  }, [currentId, post]);

  return { isLoading, currentId, post, userPosts };
};
