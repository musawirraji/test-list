import { Loader } from "@/components";
import { usePostData } from "@/hooks";
import { useTranslations } from "next-intl";
import { NoPost, PostDetails, RelatedPosts } from "../../components";

export const PostView = () => {
  const t = useTranslations("pages.posts");
  const { isLoading, currentId, post, userPosts } = usePostData();

  if (!isLoading && currentId && !post) {
    return <NoPost />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-10 lg:p-12 ">
      <div className="bg-white p-8 text-xl font-bold rounded-md h-full">
        {post && <PostDetails post={post} />}

        {userPosts && (
          <RelatedPosts userPosts={userPosts} title={t("otherPosts")} />
        )}
      </div>
    </div>
  );
};
