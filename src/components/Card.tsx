import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Picklist, Option } from "react-rainbow-components";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../utils/redux/store";
import { newsAction } from "../utils/redux/reducers/news";
import { categoryAction } from "../utils/redux/reducers/category";

import * as Assets from "../utils/assets";
import Image from "../helpers/LazyLoad";
import Loader from "./Loader";
import * as date from "../helpers/date";
import * as Feed from "./Feed";
import * as Input from "../components/Input";
import * as Button from "../components/Button";

// News
export const News: React.FC = () => {
  const navigate = useNavigate();
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const getNews = useSelector((state: RootState) => state.news.getNews);

  const handleNewsDetail = async (bnew: { bun_id: any }) => {
    const cbGetNewFulfilled = () => {
      navigate(`/news/detail/${bnew.bun_id}`, { preventScrollReset: true });
    };

    await dispatch(
      newsAction.getNewThunk({ params: `/${bnew.bun_id}`, cbGetNewFulfilled })
    );
  };

  return (
    <>
      {getNews.isLoading ? (
        <div className="mt-8 flex-1 h-[50vh] flex items-center">
          <Loader />
        </div>
      ) : !getNews?.data?.data?.length ? (
        <div className="mt-8 flex-1 h-[50vh] flex items-center">
          <Feed.NotFound msg={getNews?.data?.msg} />
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xs:w-full">
          {getNews?.data?.data?.map((bnew: any) => (
            <button
              onClick={() => {
                handleNewsDetail(bnew);
              }}
              key={bnew.id}
              className="flex"
            >
              <li key={bnew.id} className="xs:w-full">
                <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                  <div className="rounded-[10px] bg-white p-4 sm:p-6">
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        {bnew.title}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-gray-600">
                        By {bnew.author}
                      </p>
                    </div>
                    <dl className="my-2 flex gap-4 sm:gap-6">
                      <div className="flex flex-col-reverse">
                        <dt className="text-left text-xs font-medium text-gray-600">
                          Created
                        </dt>
                        <dd className="text-left text-xs text-gray-500">
                          {date.format(+bnew.created_at)}
                        </dd>
                      </div>

                      {bnew.updated_at ? (
                        <div className="flex flex-col-reverse">
                          <dt className="text-left text-xs font-medium text-gray-600">
                            Updated
                          </dt>
                          <dd className="text-left text-xs text-gray-500">
                            {date.format(+bnew.updated_at)}
                          </dd>
                        </div>
                      ) : null}
                    </dl>
                    <div className="mt-2 flex flex-wrap gap-1">
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        {bnew.cn_name}
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            </button>
          ))}
        </ul>
      )}
    </>
  );
};

// News Detail
export const NewsDetail: React.FC = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  // Get new state
  const getNew = useSelector((state: RootState) => state.news.getNew);

  // Confirm news state
  const confirmNews = useSelector((state: RootState) => state.news.confirmNews);

  // Login state
  const login = useSelector((state: RootState) => state.auth.login);

  // Update & Delete
  const handleClickGoToUpdate = async () => {
    const cbFulfilled = () => {
      dispatch(newsAction.confirmNews({ ...confirmNews, isUpdated: true }));
    };

    await dispatch(categoryAction.getCategoryThunk({ cbFulfilled }));
  };

  const handleClickGoToDelete = () => {
    dispatch(newsAction.confirmNews({ ...confirmNews, isDeleted: true }));
  };

  return (
    <article className="relative my-8 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl lg:w-1/2 sm:w-full xs:w-full">
      {["admin", "owner"].includes(login?.data?.data?.bu_role) ? (
        <Button.GoToUpdateOrDelete
          deleteIconClassName={"text-red-600 h-4 w-4"}
          updateIconClassName={"text-teal-600 h-4 w-4"}
          onClickGoToUpdate={handleClickGoToUpdate}
          onClickGoToDelete={handleClickGoToDelete}
        />
      ) : (
        false
      )}
      <div className="flex rounded-[10px] bg-white p-4 sm:p-6 items-start sm:gap-8 border-2 border-solid borde-green-500">
        <div>
          <strong className="rounded border border-teal-600 bg-teal-500 px-3 py-1.5 text-[10px] font-medium text-white">
            {date.format(+getNew?.data?.data?.created_at)}
          </strong>

          <h3 className="mt-4 text-lg font-medium sm:text-xl">
            <a href="" className="hover:underline">
              {" "}
              {getNew?.data?.data?.title}
            </a>
          </h3>

          <p className="mt-1 text-sm text-gray-700">
            {getNew?.data?.data?.description}
          </p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
              Created by
              <span className="font-medium underline hover:text-gray-700">
                {" "}
                {getNew?.data?.data?.author}
              </span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

// News Update
export const NewsUpdate: React.FC = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  // Get new state
  const getNew = useSelector((state: RootState) => state.news.getNew);

  // Confirm news state
  const confirmNews = useSelector((state: RootState) => state.news.confirmNews);

  // Get category state
  const getCategory = useSelector(
    (state: RootState) => state.category.getCategory
  );

  // Get login state
  const login = useSelector((state: RootState) => state.auth.login);

  const [body, setBody] = useState({
    author: getNew?.data?.data?.author || "",
    c_news_id: getNew?.data?.data?.c_news_id || "",
    title: getNew?.data?.data?.title || "",
    description: getNew?.data?.data?.description || "",
  });

  const handleUpdateBody = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    setBody({ ...body, [name]: value });
  };

  const handleUpdateSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const cbUpdateNewFulfilled = async () => {
      const cbGetNewFulfilled = async () => {
        await Promise.resolve(
          dispatch(newsAction.confirmNews({ ...confirmNews, isUpdated: false }))
        );

        setTimeout(() => {
          dispatch(newsAction.clearUpdateNew());
        }, 2000);
      };

      await dispatch(
        newsAction.getNewThunk({
          params: `/${getNew?.data?.data?.bun_id}`,
          cbGetNewFulfilled,
        })
      );
    };

    await dispatch(
      newsAction.updateNewThunk({
        cbUpdateNewFulfilled,
        params: getNew?.data?.data?.bun_id,
        body,
        token: login?.data?.data?.bl_token,
      })
    );
  };

  const handleUpdateReset = () => {
    setBody({ ...body });
  };

  const handleCancelUpdateToDelete = () => {
    dispatch(newsAction.confirmNews({ ...confirmNews, isUpdated: false }));
  };

  return (
    <div className="my-8 border-2 border-solid borde-red-500 h-fit py-2 px-4 bg-white rounded-xl lg:w-1/2 sm:w-full xs:w-full">
      <div className="flex items-center justify-between">
        <h1 className=" my-2 text-xl font-bold text-teal-600">Update</h1>
        <Button.Cancel
          closeIconClassName={"text-red-600 h-6 w-6"}
          onClick={handleCancelUpdateToDelete}
        />
      </div>
      <form
        action="#"
        className="flex flex-col"
        onSubmit={handleUpdateSubmit}
        noValidate
      >
        <div className="py-2 flex flex-col gap-y-4 ">
          <Input.Edit
            label={"Author"}
            name={"author"}
            value={body.author}
            labelAlignment={"left"}
            className={"w-full"}
            onChange={handleUpdateBody}
            required={true}
          />
          <Picklist
            placeholder={body.c_news_id || "Choose Category"}
            onChange={(value: any) =>
              setBody({ ...body, c_news_id: value.value })
            }
            label="Categoty"
            labelAlignment={"left"}
            className={"w-full"}
            required={true}
          >
            {getCategory?.data?.data?.map(
              (category: { id: any; cn_name: any }) => (
                <Option
                  name={"c_news_id"}
                  value={category.id}
                  label={`${category.id}. ${category.cn_name}`}
                  key={category.id}
                />
              )
            )}
          </Picklist>
          <Input.Edit
            label={"Title"}
            name={"title"}
            value={body.title}
            labelAlignment={"left"}
            className={"w-full"}
            onChange={handleUpdateBody}
            required={true}
          />
          <Input.Edit
            label={"Description"}
            name={"description"}
            value={body.description}
            labelAlignment={"left"}
            className={"w-full"}
            onChange={handleUpdateBody}
            required={true}
          />
        </div>
        <div className="my-4 flex flex-col gap-y-2">
          <Button.Update
            value={"Update"}
            className={
              "rounded-md bg-teal-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-700 w-full cursor-pointer"
            }
          />
          {Object.values(body).some((value) => value !== "") ? (
            <button
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block w-full"
              onClick={handleUpdateReset}
            >
              Reset
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};

// New Delete
export const NewDelete: React.FC = () => {
  const navigate = useNavigate();
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  // Get login state
  const login = useSelector((state: RootState) => state.auth.login);

  // Get News state
  const getNews = useSelector((state: RootState) => state.news.getNews);

  // Query News state
  const query = useSelector((state: RootState) => state.news.queryNews);

  // Get new state
  const getNew = useSelector((state: RootState) => state.news.getNew);

  // Confirm news state
  const confirmNews = useSelector((state: RootState) => state.news.confirmNews);

  const handleDeleteNew = async () => {
    const cbDeleteNewFulfilled = async () => {
      await Promise.resolve(
        dispatch(newsAction.confirmNews({ ...confirmNews, isDeleted: false }))
      );

      setTimeout(() => {
        dispatch(newsAction.clearDeleteNew());
        if (getNews?.data?.data?.length === 1) {
          dispatch(newsAction.queryNews({ ...query, page: query.page - 1 }));
        }
        dispatch(newsAction.clearGetNew());

        navigate("/news/admin", { replace: true });
      }, 2000);
    };

    await dispatch(
      newsAction.deleteNewThunk({
        params: getNew?.data?.data?.bun_id,
        token: login?.data?.data?.bl_token,
        cbDeleteNewFulfilled,
      })
    );
  };

  return (
    <div className="flex justify-end">
      <button
        className="inline-block rounded-md border border-red-600 px-4 py-2 text-sm text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-none active:bg-red-500"
        onClick={handleDeleteNew}
      >
        Delete
      </button>
    </div>
  );
};

// Services
export const Service: React.FC = () => {
  const getServices = useSelector(
    (state: RootState) => state.services.getServices
  );

  return (
    <>
      {getServices.isLoading ? (
        <div className="mt-8 flex-1 h-[50vh] flex items-center">
          <Loader />
        </div>
      ) : !getServices?.data?.data?.length ? (
        <div className="mt-8 flex-1 h-[50vh] flex items-center">
          <Feed.NotFound msg={getServices?.data?.msg} />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {getServices?.data?.data?.map((service: any) => (
            <Link
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
              to="#"
              key={service.id}
            >
              <Image
                src={Assets.Image.MarketingBro}
                className="w-10 h-10"
                alt="Marketing Bro"
              />

              <h2 className="mt-4 text-xl font-bold text-white">
                {service.title}
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
