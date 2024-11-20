import { MoreLinkButton } from "@/components";
import { PostCard } from "@/features/posts";
import { Post } from "@/types";

interface AdditionalPostsProps {
  posts: Post[];
  toPostsText: string;
}

export const AdditionalPosts = ({
  posts,
  toPostsText,
}: AdditionalPostsProps) => {
  return (
    <div className="flex flex-wrap sm:w-[40%] sm:flex-col gap-10">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <MoreLinkButton href="/posts" text={toPostsText} />
    </div>
  );
};
