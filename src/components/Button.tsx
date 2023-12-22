import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import { SiWhatsapp } from "react-icons/si";
import {
  RiDeleteBin2Line,
  RiEdit2Line,
  RiCloseCircleLine,
} from "react-icons/ri";
import { IconContext } from "react-icons";

import * as Content from "../lib/content";

type HomeProp = {
  className: string;
  title: string;
  onClick?: () => void;
};

export const Home: React.FC<HomeProp> = ({ className, title, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

type TopDownProps = {
  className: string;
  children: ReactNode;
  iconClassName: string;
  onClick?: () => void;
};

export const TopDown: React.FC<TopDownProps> = ({
  className,
  children,
  iconClassName,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      <IconContext.Provider value={{ className: iconClassName }}>
        {children}
      </IconContext.Provider>
    </button>
  );
};

export const WhatsApp: React.FC = () => {
  return (
    <Link
      to={"https://wa.me/send?phone=" + `${Content.WhatsApp.to}`}
      className="fixed bottom-4 right-4 inline-block rounded-full bg-teal-600 p-2 xs:p-3 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4 z-50"
      target="_blank"
    >
      <IconContext.Provider
        value={{ className: "w-4 h-4 text-white animate-ping" }}
      >
        <SiWhatsapp />
      </IconContext.Provider>
    </Link>
  );
};

type AuthProps = {
  className: string;
  value: string;
};

export const Auth: React.FC<AuthProps> = ({ value, className }) => {
  return <input type="submit" value={value} className={className} />;
};

type PaginationProps = {
  prevClick?: () => void;
  nextClick?: () => void;
  page: string | number;
  totalPage: string | number;
  disablePrev?: boolean;
  disableNext?: boolean;
};

export const Pagination: React.FC<PaginationProps> = ({
  prevClick,
  nextClick,
  disablePrev,
  disableNext,
  page,
  totalPage,
}) => {
  return (
    <div className="inline-flex items-center justify-center gap-3">
      <button
        onClick={prevClick}
        className={
          "inline-flex h-8 w-8 items-center justify-center rounded border-none text-white " +
          `${
            disablePrev
              ? "bg-teal-300 cursor-not-allowed"
              : "bg-teal-600 transition hover:scale-110"
          }`
        }
        disabled={disablePrev}
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <p className="text-xs text-teal-600 font-semibold">
        {page}
        <span className="mx-0.25">/</span>
        {totalPage}
      </p>

      <button
        onClick={nextClick}
        className={
          "inline-flex h-8 w-8 items-center justify-center rounded border border-none text-white " +
          `${
            disableNext
              ? "bg-teal-300 cursor-not-allowed"
              : "bg-teal-600 transition hover:scale-110"
          }`
        }
        disabled={disableNext}
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

type resetProps = {
  onClick?: () => void;
};

export const Reset: React.FC<resetProps> = ({ onClick }) => {
  return (
    <button
      className="inline-block rounded border border-teal-600 bg-teal-600 px-6 py-2 text-xs font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
      onClick={onClick}
    >
      Reset
    </button>
  );
};

export const Humburger: React.FC = () => {
  return (
    <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
      <span className="sr-only">Toggle menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

type BackProps = {
  title: string;
  to: string;
};

export const Back: React.FC<BackProps> = ({ title, to }) => {
  return (
    <Link
      className="group relative inline-flex items-center overflow-hidden rounded bg-none px-8 py-3 text-teal-600 focus:outline-none focus:ring-0"
      to={to}
      preventScrollReset={true}
    >
      <span className="absolute -start-full transition-all group-hover:start-4">
        <svg
          className="h-5 w-5 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>

      <span className="text-xs font-medium transition-all group-hover:ms-4">
        {" "}
        {title}
      </span>
    </Link>
  );
};

export const Update: React.FC<AuthProps> = ({ value, className }) => {
  return <input type="submit" value={value} className={className} />;
};

type GoToUpdateOrDeleteProps = {
  onClickGoToUpdate?: () => void;
  onClickGoToDelete?: () => void;
  deleteIconClassName?: string;
  updateIconClassName?: string;
};

export const GoToUpdateOrDelete: React.FC<GoToUpdateOrDeleteProps> = ({
  onClickGoToUpdate,
  onClickGoToDelete,
  deleteIconClassName,
  updateIconClassName,
}) => {
  return (
    <div className="absolute top-1 right-1 flex gap-x-2 p-2">
      <button
        onClick={onClickGoToUpdate}
        className="transition hover:scale-110"
      >
        <IconContext.Provider value={{ className: updateIconClassName }}>
          <RiEdit2Line />
        </IconContext.Provider>
      </button>
      <button
        onClick={onClickGoToDelete}
        className="transition hover:scale-110"
      >
        <IconContext.Provider value={{ className: deleteIconClassName }}>
          <RiDeleteBin2Line />
        </IconContext.Provider>
      </button>
    </div>
  );
};

type CancelProps = {
  onClick?: () => void;
  closeIconClassName?: string;
};

export const Cancel: React.FC<CancelProps> = ({
  onClick,
  closeIconClassName,
}) => {
  return (
    <button onClick={onClick} className="flex h-fit transition hover:scale-110">
      <IconContext.Provider value={{ className: closeIconClassName }}>
        <RiCloseCircleLine />
      </IconContext.Provider>
    </button>
  );
};
