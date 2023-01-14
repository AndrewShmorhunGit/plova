import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/useAppDispatch";
import { fetchUserLogin } from "../store/actions/userActions";
// import { user } from "../units/data/userData";

export const GetStarted = () => {
  const dispatch = useAppDispatch();
  const { isActive, loading, error, user } = useAppSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(fetchUserLogin(user));
  }, []);

  return <GetStarted />;
};
