import { ReactNode } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../utils/redux/store";
import { Navigate } from "react-router-dom";

type AccessProps = {
  children: ReactNode;
};

export const PreventDirect = ({ children }: AccessProps) => {
  const login = useSelector((state: RootState) => state.auth.login);

  if (!login?.data?.data?.bl_token) {
    return <Navigate to={"/home/admin"} replace={true} />;
  }

  return children;
};

export const PreventBackHistory = ({ children }: AccessProps) => {
  const login = useSelector((state: RootState) => state.auth.login);

  if (login?.data?.data?.bl_token) {
    return <Navigate to={"/home/admin"} replace={true} />;
  }

  return children;
};
