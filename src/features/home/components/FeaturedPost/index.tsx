import { UserProfileLink } from "@/features/posts";
import { Post } from "@/types";
import Image from "next/image";
import blogImage from "../../../../../public/blog-image.webp";

interface FeaturedPostProps {
  post: Post;
}

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="flex gap-6 border border-green-100 rounded-md p-4 sm:w-[80%]">
      <div className="flex flex-col gap-6">
        <Image
          src={blogImage}
          alt="blog-image"
          className="rounded-md object-cover w-full h-[40%]"
        />
        <div className="w-48">
          <UserProfileLink
            userId={post.userId || 0}
            username={post.user?.username || ""}
            name={post.user?.name}
          />
        </div>
        <h3 className="font-bold sm:text-2xl uppercase">{post.title}</h3>
        <p className="font-normal text-base">{post.body}</p>
      </div>
    </div>
  );
};
