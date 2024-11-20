import { Grid } from "@/components";
import { useUsersContext } from "@/hooks";
import { UserCard } from "../../components";

export const Users = () => {
  const { users } = useUsersContext();
  return <Grid items={users} renderItem={(user) => <UserCard user={user} />} />;
};
