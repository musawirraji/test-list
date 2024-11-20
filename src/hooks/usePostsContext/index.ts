import { PostsContext } from "@/contexts";
import { useContext } from "react";

export const usePostsContext = () => useContext(PostsContext);
