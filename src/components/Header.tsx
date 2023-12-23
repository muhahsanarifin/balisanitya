import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useWindowScroll } from "react-use";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../utils/redux/store";
import { notificationsAction } from "../utils/redux/reducers/notifications";
import { userAction } from "../utils/redux/reducers/user";
import { authAction } from "../utils/redux/reducers/auth";

import * as Content from "../lib/content";
import Image from "../helpers/LazyLoad";
import * as Button from "../components/Button";
import * as Notification from "../components/Notification";

const Header: React.FC = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { y } = useWindowScroll();

  // Login state
  const login = useSelector((state: RootState) => state.auth.login);

  // Announcement state
  const announcement = useSelector(
    (state: RootState) => state.notifications.announcement
  );

  // Rules state
  const rules = useSelector((state: RootState) => state.user.rules);

  const handleAnnountcement = () => {
    dispatch(
      notificationsAction.announcement({ ...announcement, isActived: false })
    );
  };

  const handleLogout = async () => {
    const cbFulfilled = () => {
      dispatch(authAction.clearLogin());
    };

    await dispatch(
      authAction.logoutThunk({
        token: login?.data?.data?.bl_token,
        cbFulfilled,
      })
    );
  };

  return (
    <>
      {/* Greeting */}
      {[
        "/home/admin",
        "/services/admin",
        "/news/admin",
        "/about/admin",
      ].includes(location.pathname) ? null : (
        <>
          {rules.isAccepted ? null : (
            <div className="relative">
              <Notification.Greeting
                title={"Dear user!"}
                description={"Terms & Conditions, Privacy Policy"}
                onClick={() =>
                  dispatch(userAction.rules({ ...rules, isAccepted: true }))
                }
              />
            </div>
          )}
        </>
      )}
      <header
        className={`sticky top-0 left-0 right-0 z-50 ${
          y > 0 && !["/services", "/news"].includes(location.pathname)
            ? "backdrop-invert bg-white/30 backdrop-opacity-10"
            : "bg-white"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link
            className="block text-teal-600"
            to={
              [
                "/home/admin",
                "/services/admin",
                "/news/admin",
                "/about/admin",
              ].includes(location.pathname)
                ? "/home/admin"
                : "/"
            }
          >
            <span className="sr-only">Home</span>
            <Image
              src={Content.Header.image}
              className="h-8 w-8"
              alt={Content.Header.alt}
            />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            {/* Navbar */}
            <nav aria-label="Global" className="hidden md:block">
              {[
                "/home/admin",
                "/services/admin",
                "/news/admin",
                "/about/admin",
              ].includes(location.pathname) ? (
                <ul className="flex items-center gap-6 text-sm">
                  {Content.Header.lists.map((list, idx) => (
                    <li className="flex" key={idx}>
                      <NavLink
                        to={list.path[1]}
                        className={({ isActive }) =>
                          [
                            isActive
                              ? "text-teal-600 font-medium underline underline-offset-8 decoration-2 decoration-teal-500"
                              : "text-gray-700 font-medium transition hover:text-gray-700/75",
                          ].join(" ")
                        }
                      >
                        {list.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="flex items-center gap-6 text-sm">
                  {Content.Header.lists.map((list, idx) => (
                    <li className="flex" key={idx}>
                      <NavLink
                        to={list.path[0]}
                        className={({ isActive }) =>
                          [
                            isActive
                              ? "text-teal-600 font-medium underline underline-offset-8 decoration-2 decoration-teal-500"
                              : "text-gray-700 font-medium transition hover:text-gray-700/75",
                          ].join(" ")
                        }
                      >
                        {list.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </nav>

            <div className="flex items-center gap-4">
              {[
                "/home/admin",
                "/services/admin",
                "/news/admin",
                "/about/admin",
              ].includes(location.pathname) ? (
                <div className="sm:flex sm:gap-4">
                  {login?.data?.data?.bl_token ? (
                    <Button.Home
                      title="Logout"
                      className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                      onClick={handleLogout}
                    />
                  ) : (
                    <>
                      <Button.Home
                        title="Login"
                        className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                        onClick={() =>
                          navigate("/auth/login/admin", {
                            preventScrollReset: true,
                          })
                        }
                      />
                      <Button.Home
                        title="Register"
                        className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                        onClick={() =>
                          navigate("/auth/register/admin", {
                            preventScrollReset: true,
                          })
                        }
                      />
                    </>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {/* Navbar mobile  */}
      <div className="md:hidden xs:block fixed bottom-4 left-4 z-50 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
        <nav
          aria-label="Global"
          className="border border-teal-600 bg-white py-2 px-4 rounded-2xl"
        >
          {[
            "/home/admin",
            "/services/admin",
            "/news/admin",
            "/about/admin",
          ].includes(location.pathname) ? (
            <ul className="flex items-center gap-6 text-xs">
              {Content.Header.lists.map((list, idx) => (
                <li className="flex" key={idx}>
                  <NavLink
                    to={list.path[1]}
                    className={({ isActive }) =>
                      [
                        isActive
                          ? "text-teal-600 font-medium underline underline-offset-4 decoration-2 decoration-teal-500"
                          : "text-gray-700 font-medium transition hover:text-gray-700/75",
                      ].join(" ")
                    }
                  >
                    {list.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="flex items-center gap-6 text-xs">
              {Content.Header.lists.map((list, idx) => (
                <li className="flex" key={idx}>
                  <NavLink
                    to={list.path[0]}
                    className={({ isActive }) =>
                      [
                        isActive
                          ? "text-teal-600 font-medium underline underline-offset-4 decoration-2 decoration-teal-500"
                          : "text-gray-700 font-medium transition hover:text-gray-700/75",
                      ].join(" ")
                    }
                  >
                    {list.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>

      {/* Announcement */}
      {[
        "/services",
        "/home/admin",
        "/services/admin",
        "/news/admin",
        "/about/admin",
      ].includes(location.pathname) ? null : announcement?.isActived ? (
        <Notification.Announcement
          onClick={handleAnnountcement}
          title="Abroud carrer? "
          description="See our services."
          to="/services"
        />
      ) : null}
    </>
  );
};

export default Header;
