"use client";
import { Post } from "@/types";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import postsData from "../../mockData/posts.json";
import userData from "../../mockData/users.json";

interface PostsContextType {
  posts: Post[];
  isLoading: boolean;
  getPostData: (postId?: number) => Post | undefined;
  getUserPosts: (currentUserId?: number) => Post[] | undefined;
}

export const PostsContext = createContext<PostsContextType>({
  posts: [],
  isLoading: false,
  getPostData: () => {
    return undefined;
  },
  getUserPosts: () => {
    return [];
  },
});

type PostsProviderProps = {
  children: ReactNode;
};
export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const getPostData = useCallback(
    (postId?: number) => posts.find(({ id }) => id === postId),
    [posts]
  );

  const getUserPosts = useCallback(
    (currentUserId?: number) =>
      posts.filter(({ userId }) => userId === currentUserId),
    [posts]
  );

  useEffect(() => {
    setIsLoading(true);
    const postWithUser = postsData.map((post) => {
      const user = userData.find((user) => user.id === post.userId);
      return {
        ...post,
        user,
      };
    });

    setPosts(postWithUser);
    setIsLoading(false);
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        isLoading,
        getPostData,
        getUserPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
