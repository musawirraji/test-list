import { MoreLinkButton } from "@/components";
import { Post } from "@/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import blogImage from "../../../../../public/blog-image.webp";
import { UserProfileLink } from "../UserProfileLink";

interface PostCardProps {
  post: Post;
}
export const PostCard = ({ post }: PostCardProps) => {
  const t = useTranslations("pages.posts");

  return (
    <div className="flex flex-col border border-green-100 rounded-md p-4 bg-white justify-between hover:scale-105 transition duration-300 ease-in-out">
      <Image src={blogImage} alt="blog-image" className="rounded-md" />
      <UserProfileLink
        userId={post.userId}
        username={post.user?.username || ""}
      />
      <h5 className="my-2 h-10 text-base font-bold leading-tight line-clamp-2 overflow-hidden text-ellipsis">
        {post.title}
      </h5>
      <p className="mb-4 text-xs font-normal line-clamp-5 overflow-hidden text-ellipsis">
        {post.body}
      </p>

      <MoreLinkButton href={`/posts/${post.id}`} text={t("readMore")} />
    </div>
  );
};
