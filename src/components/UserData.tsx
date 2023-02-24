import { User } from "../modules/modules";
import { UserInfoButton, UserOrdersButton } from "./index";

export const UserData = (props: { color: string; user: User | null }) => {
  return (
    <div className="center">
      <UserInfoButton color={props.color} user={props.user} />
      <UserOrdersButton color={props.color} user={props.user} />
    </div>
  );
};
