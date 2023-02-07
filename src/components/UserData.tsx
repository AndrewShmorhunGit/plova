import { UserInfoButton, UserOrdersButton } from "./index";

export const UserData = (props: { color: string }) => {
  return (
    <div className="center">
      <UserInfoButton color={props.color} />
      <UserOrdersButton color={props.color} />
    </div>
  );
};
