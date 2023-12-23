import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../utils/redux/store";
import { authAction } from "../utils/redux/reducers/auth";

import * as Notification from "../components/Notification";
import * as Form from "../components/Form";

export const Admin = () => {
  const usAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = usAppDispatch();

  // Login state
  const login = useSelector((state: RootState) => state.auth.login);

  return (
    <main className="relative">
      {/* Notification */}
      {login?.isFulfilled || login?.isRejected ? (
        <section className=" absolute right-4 top-4 xs:right-0 flex z-50">
          <Notification.Alert
            icon={
              login?.isFulfilled
                ? "success"
                : login?.isRejected
                ? "error"
                : "info"
            }
            title={
              login?.isRejected
                ? JSON.parse(login?.err)?.status
                : login?.data?.status
            }
            description={
              login?.isRejected ? JSON.parse(login?.err)?.msg : login?.data?.msg
            }
            onRequestClose={() => dispatch(authAction.clearLogin())}
            hideCloseButton={
              login?.isFulfilled || login?.isRejected ? false : true
            }
          />
        </section>
      ) : null}
      <section className="relative">
        <Form.SignIn />
      </section>
    </main>
  );
};
