import { Grid } from "@/components";
import { Post } from "@/types";
import { PostCard } from "../../components";

interface RelatedPostsProps {
  userPosts: Post[];
  title: string;
}

export const RelatedPosts = ({ userPosts, title }: RelatedPostsProps) => {
  return (
    <div className="font-bold text-xl mt-10">
      <p className="text-center sm:text-left w-full text-md">{title}</p>
      <Grid items={userPosts} renderItem={(post) => <PostCard post={post} />} />
    </div>
  );
};
