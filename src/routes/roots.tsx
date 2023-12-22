import Home from "../pages/home";
import * as Register from "../pages/register";
import * as Login from "../pages/login";
import * as Services from "../pages/services";
import * as News from "../pages/news";
import About from "../pages/about";
import MetaTitle from "../components/MetaTitle";
import Error from "../pages/error";

const roots = [
  {
    path: "/",
    element: (
      <MetaTitle title="Home" content="Home">
        <Home />
      </MetaTitle>
    ),
  },
  {
    path: "/home/admin",
    element: (
      <MetaTitle title="Admin Home" content="Admin Home">
        <Home />
      </MetaTitle>
    ),
  },
  {
    path: "/auth/login/admin",
    element: (
      <MetaTitle title="Admin Login" content="Admin Login">
        <Login.Admin />
      </MetaTitle>
    ),
  },
  {
    path: "/auth/register/admin",
    element: (
      <MetaTitle title="Admin Register" content="Admin Register">
        <Register.Admin />
      </MetaTitle>
    ),
  },
  // Services
  {
    path: "/services",
    element: (
      <MetaTitle title="Services View" content="Services View">
        <Services.View />
      </MetaTitle>
    ),
  },
  {
    path: "/services/create",
    element: (
      <MetaTitle title="Services Create" content="Services Create">
        <Services.Create />
      </MetaTitle>
    ),
  },
  {
    path: "/services/detail/:id",
    element: (
      <MetaTitle title="Services Detail" content="Services Detail">
        <Services.Detail />
      </MetaTitle>
    ),
  },
  // News
  {
    path: "/news",
    element: (
      <MetaTitle title="News View" content="News View">
        <News.View />
      </MetaTitle>
    ),
  },
  {
    path: "/news/create",
    element: (
      <MetaTitle title="News Create" content="News Create">
        <News.Create />
      </MetaTitle>
    ),
  },
  {
    path: "/news/detail/:id",
    element: (
      <MetaTitle title="News Detail" content="News Detail">
        <News.Detail />
      </MetaTitle>
    ),
  },
  {
    path: "/About",
    element: (
      <MetaTitle title="About" content="About">
        <About />
      </MetaTitle>
    ),
  },
  {
    path: "*",
    element: (
      <MetaTitle title="Not Found" content="Not Found">
        <Error />
      </MetaTitle>
    ),
  },
];

export default roots;
