import React, { useState } from "react";
import * as Input from "../components/Input";
import { Link } from "react-router-dom";
import * as Button from "../components/Button";
import Image from "../helpers/LazyLoad";
import * as Assets from "../utils/assets";
import { RadioGroup } from "react-rainbow-components";

export const SignIn: React.FC = () => {
  type handleLoginInputParams = {
    target: {
      name: string;
      value: string;
    };
  };

  type handleLoginSubmitProps = {
    preventDefault: () => void;
  };

  const [body, setBody] = useState({
    bu_email: "",
    bu_password: "",
  });

  const handleLoginInput = (e: handleLoginInputParams) => {
    const { name, value } = e.target;

    setBody({ ...body, [name]: value.trimStart() });
  };

  const handleLoginSubmit = async (e: handleLoginSubmitProps) => {
    e.preventDefault();

    setBody({ ...body, bu_email: "", bu_password: "" });
  };

  const handleLogInputReset = () => {
    setBody({
      ...body,
      bu_email: "",
      bu_password: "",
    });
  };

  return (
    <section className="bg-gray-1 py-16 dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg px-10 py-16 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <Link
                  to={"/home/admin"}
                  className="mx-auto inline-block max-w-[160px]"
                >
                  <Image src={Assets.Image.BSS} className="h-16 w-16" />
                </Link>
                <h1 className="mt-6 text-xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  BALISANITYA <sub className="text-sm">Sign In</sub>
                </h1>
              </div>
              <form onSubmit={handleLoginSubmit} noValidate>
                <Input.Box
                  type="email"
                  name="bu_email"
                  placeholder="Email"
                  onChange={handleLoginInput}
                  className="w-full rounded-md border border-stroke px-5 py-3 border-gray-200 shadow-sm sm:text-sm focus:outline-teal-600"
                  value={body.bu_email}
                />
                <Input.Box
                  type="password"
                  name="bu_password"
                  placeholder="Password"
                  onChange={handleLoginInput}
                  className="w-full rounded-md border border-stroke px-5 py-3 border-gray-200 shadow-sm sm:text-sm focus:outline-teal-600"
                  value={body.bu_password}
                />

                <div className="mb-10">
                  <Button.Auth
                    value="Login"
                    className="rounded-md bg-teal-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-700 w-full cursor-pointer"
                  />
                </div>
                {Object.values(body).some((value) => value !== "") ? (
                  <button
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block w-full"
                    onClick={handleLogInputReset}
                  >
                    Reset
                  </button>
                ) : null}
              </form>
              <Link
                to="/#"
                className="mb-2 inline-block hover:underline text-xs font-medium text-gray-900"
                preventScrollReset={true}
              >
                Forget Password?
              </Link>
              <p className="text-xs font-medium text-gray-900">
                <span className="pr-0.5">Not a member yet?</span>
                <Link
                  to="/auth/register/admin"
                  className="text-primary hover:underline"
                  preventScrollReset={true}
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SignUp: React.FC = () => {
  type handleLoginInputParams = {
    target: {
      name: string;
      value: string;
    };
  };

  type handleLoginSubmitProps = {
    preventDefault: () => void;
  };

  const [body, setBody] = useState({
    username: "",
    bu_email: "",
    bu_password: "",
    bu_confirmPassword: "",
    bu_role: "",
  });

  const handleRegisterInput = (e: handleLoginInputParams) => {
    const { name, value } = e.target;

    setBody({ ...body, [name]: value.trimStart() });
  };

  const handleRegisterSubmit = async (e: handleLoginSubmitProps) => {
    e.preventDefault();

    await Promise.resolve(console.log(body));

    setBody({
      ...body,
      username: "",
      bu_email: "",
      bu_password: "",
      bu_confirmPassword: "",
      bu_role: "",
    });
  };

  const options = [
    { value: "admin", label: "Admin" },
    { value: "owner", label: "Owner" },
  ];

  const handleRegInputReset = () => {
    setBody({
      ...body,
      username: "",
      bu_email: "",
      bu_password: "",
      bu_confirmPassword: "",
      bu_role: "",
    });
  };

  return (
    <section className="bg-gray-1 py-16 dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg px-10 py-16 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <Link
                  to={"/home/admin"}
                  className="mx-auto inline-block max-w-[160px]"
                >
                  <Image src={Assets.Image.BSS} className="h-16 w-16" />
                </Link>
                <h1 className="mt-6 text-xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  BALISANITYA <sub className="text-sm">Sign Up</sub>
                </h1>
              </div>
              <form onSubmit={handleRegisterSubmit} noValidate>
                <Input.Box
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleRegisterInput}
                  className="w-full rounded-md border border-stroke px-5 py-3 border-gray-200 shadow-sm sm:text-sm focus:outline-teal-600"
                  value={body.username}
                />
                <Input.Box
                  type="email"
                  name="bu_email"
                  placeholder="Email"
                  onChange={handleRegisterInput}
                  className="w-full rounded-md border border-stroke px-5 py-3 border-gray-200 shadow-sm sm:text-sm focus:outline-teal-600"
                  value={body?.bu_email}
                />
                <Input.Box
                  type="password"
                  name="bu_password"
                  placeholder="Password"
                  onChange={handleRegisterInput}
                  className="w-full rounded-md border border-stroke px-5 py-3 border-gray-200 shadow-sm sm:text-sm focus:outline-teal-600"
                  value={body.bu_password}
                />

                <Input.Box
                  type="password"
                  name="bu_confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleRegisterInput}
                  className="w-full rounded-md border border-stroke px-5 py-3 border-gray-200 shadow-sm sm:text-sm focus:outline-teal-600"
                  value={body.bu_confirmPassword}
                />

                <div className="mb-10">
                  <RadioGroup
                    name="bu_role"
                    options={options}
                    value={body.bu_role}
                    onChange={handleRegisterInput}
                    label="Roles"
                    required
                    orientation="horizontal"
                  />
                </div>

                <div className="mb-10">
                  <Button.Auth
                    value="Login"
                    className="rounded-md bg-teal-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-700 w-full cursor-pointer"
                  />
                </div>
                {Object.values(body).some((value) => value !== "") ? (
                  <button
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block w-full"
                    onClick={handleRegInputReset}
                  >
                    Reset
                  </button>
                ) : null}
              </form>
              <p className="text-xs font-medium text-gray-900">
                <span className="pr-0.5">Not a member yet?</span>
                <Link
                  to="/auth/login/admin"
                  className="text-primary hover:underline"
                  preventScrollReset={true}
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
