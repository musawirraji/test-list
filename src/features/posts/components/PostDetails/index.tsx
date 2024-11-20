import { Post } from "@/types";
import { UserProfileLink } from "../../components";

interface PostDetailsProps {
  post: Post;
}

export const PostDetails = ({ post }: PostDetailsProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-48">
        <UserProfileLink
          userId={post.userId || 0}
          username={post.user?.username || ""}
          name={post.user?.name}
        />
      </div>
      <h3 className="text-center font-bold sm:text-2xl uppercase">
        {post.title}
      </h3>
      <p className="font-normal text-base">{post.body}</p>
    </div>
  );
};
