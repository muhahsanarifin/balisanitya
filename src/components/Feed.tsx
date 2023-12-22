import React from "react";

type NotFoundProps = {
  status?: string;
  msg: string;
};

export const NotFound: React.FC<NotFoundProps> = ({ status, msg }) => {
  return (
    <div className="mx-auto  h-full grid place-content-center bg-none px-4">
      <h1 className="uppercase tracking-widest font-bold text-gray-500">
        {status} {status ? "|" : null} {msg}
      </h1>
    </div>
  );
};
