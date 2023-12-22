import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Favicon } from "../utils/assets";

type HeadProps = {
  children: ReactNode;
  title: string;
  content: string;
};

const MetaTitle: React.FC<HeadProps> = ({ children, title, content }) => {
  return (
    <>
      <Helmet>
        <title>{title + " - " + "Balisanitya"}</title>
        <meta name="description" content={content} />
        <link rel="icon" sizes="16x16" href={Favicon.favicon16} />
        <link rel="icon" sizes="32x32" href={Favicon.favicon32} />
        <link rel="icon" href={Favicon.favicon} />
        <link
          rel="icon"
          sizes="192x192"
          href={Favicon.androidChrome192}
        />
        <link
          rel="icon"
          sizes="512x512"
          href={Favicon.androidChrome512}
        />
        <link rel="apple-touch-icon" href={Favicon.appleTouch} />
      </Helmet>
      {children}
    </>
  );
};

export default MetaTitle;
