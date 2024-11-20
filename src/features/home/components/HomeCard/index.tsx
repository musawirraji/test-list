import { usePostsContext } from "@/hooks";
import { useTranslations } from "next-intl";
import { AdditionalPosts } from "../AdditionalPosts";
import { FeaturedPost } from "../FeaturedPost";

export const HomeCard = () => {
  const { posts } = usePostsContext();
  const t = useTranslations("pages.home");

  const post = posts[0];
  const additionalPosts = posts.slice(1, 3);

  return (
    <div className="p-10 lg:p-12 ">
      <div className="bg-white p-8 text-xl font-bold rounded-md h-full f">
        <h2 className="p-3">{t("popularPosts")}:</h2>
        <div className="flex flex-col sm:flex-row gap-10">
          {post && <FeaturedPost post={post} />}

          <AdditionalPosts posts={additionalPosts} toPostsText={t("toPosts")} />
        </div>
      </div>
    </div>
  );
};
