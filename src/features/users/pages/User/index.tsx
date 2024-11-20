import { Grid, Loader } from "@/components";
import { PostCard } from "@/features/posts";
import { useUserData } from "@/hooks";
import { Post } from "@/types";
import { useTranslations } from "next-intl";
import { NoUser, UserInfo } from "../../components";

export const User = () => {
  const t = useTranslations("pages.users");
  const { isLoading, user, userPosts } = useUserData();

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading && !user) {
    return <NoUser />;
  }

  return (
    <>
      <div className="p-10 lg:p-12">
        <div className="bg-white p-8 text-xl font-bold rounded-md h-full">
          {user && (
            <UserInfo
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
              avatarSize={40}
            />
          )}
          {!userPosts?.length && !isLoading && (
            <p className="mt-9 text-sm">{t("noPosts")}</p>
          )}
          {userPosts?.length ? (
            <Grid
              items={userPosts as Post[]}
              renderItem={(post) => <PostCard post={post} />}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};
