import { Grid, Loader } from "@/components";
import { usePostsContext } from "@/hooks";
import { PostCard } from "../../components";

export const Posts = () => {
  const { posts, isLoading } = usePostsContext();

  if (isLoading) {
    return <Loader />;
  }

  return <Grid items={posts} renderItem={(post) => <PostCard post={post} />} />;
};
