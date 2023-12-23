import React, { useEffect } from "react";
import { useWindowScroll, useDebounce } from "react-use";
import { Link } from "react-router-dom";
import { RiArrowDownDoubleFill, RiArrowUpDoubleFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { SlPin } from "react-icons/sl";
import { Picklist, Option } from "react-rainbow-components";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../utils/redux/store";
import { servicesAction } from "../utils/redux/reducers/services";
import { newsAction } from "../utils/redux/reducers/news";

import * as Content from "../lib/content";
import ParallaxTilt from "../helpers/ParallaxTilt";
import * as Assets from "../utils/assets";
import Writer from "../helpers/TypeWriter";
import Image from "../helpers/LazyLoad";
import * as Card from "../components/Card";
import * as Button from "../components/Button";
import * as Input from "../components/Input";
import * as scroll from "../helpers/scroll";

export const Banner: React.FC = () => {
  const { y } = useWindowScroll();

  const handleToTop = () => {
    scroll.to(0);
  };

  const handleToButtom = () => {
    scroll.to(1719);
  };

  return (
    <section className="relative">
      {y > 0 ? (
        <Button.TopDown
          className={
            "fixed bottom-24 right-4 inline-block rounded-full p-2 sm:p-3 lg:p-4 z-50"
          }
          iconClassName={"w-6 h-6 text-teal-600 animate-ping"}
          onClick={handleToTop}
        >
          <RiArrowUpDoubleFill />
        </Button.TopDown>
      ) : null}
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <ParallaxTilt>
              <Image
                src={Assets.Image.JobHuntBro}
                className="w-full h-full"
                alt="Job Hunt Bro"
              />
              <img />
            </ParallaxTilt>
          </div>

          <div className="lg:py-24">
            <h2 className="text-teal-600 text-3xl font-bold sm:text-4xl">
              <Writer words={["YAYASAN BALI SANITYA SEJAHTERA"]} />
            </h2>

            <p className="mt-4 text-gray-700">
              Lembaga Pelatihan Kerja (LPK) dan Lembaga Peyelenggara Pemagangan
              Luar Negeri / Sending Organization (SO).
            </p>

            <div className="my-4">
              <Button.TopDown
                className={
                  "inline-block rounded-full bg-none p-2 transition sm:p-3 lg:p-4 z-50"
                }
                iconClassName={"w-6 h-6 text-teal-600 animate-ping"}
                onClick={handleToButtom}
              >
                <RiArrowDownDoubleFill />
              </Button.TopDown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Services: React.FC = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  // Get Services state
  const getServices = useSelector(
    (state: RootState) => state.services.getServices
  );

  // Query service state
  const query = useSelector((state: RootState) => state.services.queryService);

  // Dispatch
  useEffect(() => {
    const pagination = `page=${query.page}&limit=${
      ["/services"].includes(location.pathname) ? 5 : 3
    }`;

    const filtering =
      ["/services"].includes(location.pathname) && query.debouncedTitle
        ? `title=${query.debouncedTitle}` + "&"
        : "";

    dispatch(
      servicesAction.getServicesThunk({
        query: "?" + filtering + pagination,
      })
    );
  }, [dispatch, query.page, query.debouncedTitle]);

  // Search
  const handleSearch = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    dispatch(servicesAction.queryService({ ...query, [name]: value }));
  };

  // Debounce
  useDebounce(
    () => {
      dispatch(
        servicesAction.queryService({
          ...query,
          debouncedTitle: query.title,
          page: 1,
        })
      );
    },
    2000,
    [query.title]
  );

  // Pagination
  const handleNextPage = () => {
    dispatch(servicesAction.queryService({ ...query, page: query.page + 1 }));
  };

  const handlePrevPage = () => {
    dispatch(servicesAction.queryService({ ...query, page: query.page - 1 }));
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg py-2 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            We do offer awesome Services
          </h2>

          <p className="mt-4 text-gray-300">
            Rancang masa depan karir Anda bersama kami! Temukan peluang belajar
            dan pengembangan diri melalui layanan pelatihan kerja kami yang
            komprehensif.
          </p>
        </div>

        {["/services"].includes(location.pathname) && (
          <div className="my-2 flex justify-end">
            <Input.Search
              onChange={handleSearch}
              placeholder="title"
              name="title"
              className="rainbow-p-around_medium"
              hideLable={true}
              value={query.title}
            />
          </div>
        )}

        <div className="flex h-full">
          <Card.Service />
        </div>

        {["/services"].includes(location.pathname) &&
        getServices?.isFulfilled &&
        getServices?.data?.data?.length ? (
          <div className="mt-4 flex items-center justify-end">
            <Button.Pagination
              nextClick={handleNextPage}
              prevClick={handlePrevPage}
              page={getServices?.data?.metadata?.page}
              totalPage={getServices?.data?.metadata?.total_pages}
              disablePrev={getServices?.data?.metadata?.page === 1}
              disableNext={
                getServices?.data?.metadata?.page ===
                getServices?.data?.metadata?.total_pages
              }
            />
          </div>
        ) : null}

        {["/services"].includes(location.pathname) ? null : (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-400"
              preventScrollReset={true}
            >
              See more our services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export const About: React.FC = () => {
  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                {[Assets.Image.img1, Assets.Image.img2].map((image, idx) => (
                  <div className="py-3 sm:py-4">
                    <Image
                      src={image}
                      className="w-full rounded-2xl"
                      alt={idx === 0 ? "Image 1" : "Image 2"}
                    />
                  </div>
                ))}
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <Image
                    src={Assets.Image.img3}
                    className="w-full rounded-2xl"
                    alt="Image 3"
                  />
                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.66667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3334"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 60.3334 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 60.3333 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 88.6667 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 117.667 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 74.6667 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 103 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 132 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 31 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 103 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 132 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 31 45.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 103 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 132 1.66683)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12 border border-solid border-teal-600">
            <div className="mt-10 lg:mt-0">
              <span className="block my-4 text-3xl font-semibold text-teal-600">
                Why Choose Us
              </span>
              <h2 className="mb-5 text-gray-700 text-3xl font-bold sm:text-[40px]/[48px]">
                Jaminan 100% seluruh lulusan dari sekolah kami mendapatkan
                tempat untuk berkarir
              </h2>
              <p className="mb-5 text-base text-body-color justify-center text-gray-700">
                Seluruh program kami telah terintegrasi dengan perusahaan diluar
                negeri untuk sebagai{" "}
                <span className="bg-teal-300">
                  jaminan 100% seluruh lulusan dari sekolah kami mendapatkan
                  tempat untuk berkarir
                </span>
                . Dan kami memiliki Visi Misi dalam mendirikan Lembaga ini yang
                akan berdampak besar terhadap kemajuan masyarakat dan dapat
                memberikan efek baik kepada negera.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-teal-600 border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                preventScrollReset={true}
              >
                Read more about us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const News: React.FC = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  // Get News state
  const getNews = useSelector((state: RootState) => state.news.getNews);

  // Query News state
  const query = useSelector((state: RootState) => state.news.queryNews);

  // Dispatch
  useEffect(() => {
    const pagination = `page=${query.page}&limit=${query.limit}`;

    const sorting = query.sort_by && query.sort_by + "&";

    const filtering =
      query.debouncedTitle && `title=${query.debouncedTitle}` + "&";

    dispatch(
      newsAction.getNewsThunk({
        query: "?" + filtering + sorting + pagination,
      })
    );
  }, [dispatch, query.page, query.limit, query.sort_by, query.debouncedTitle]);

  // Sorting
  const handleSort = (e: { value: string; name: string; label: string }) => {
    const { value, name, label } = e;
    dispatch(
      newsAction.queryNews({
        ...query,
        [name.split(" ")[0]]: value,
        title: query.title,
        sort_by_lable: label,
      })
    );
  };

  // Search
  const handleSearch = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    dispatch(
      newsAction.queryNews({
        ...query,
        [name]: value,
        sort_by: query.sort_by,
        sort_by_lable: query.sort_by_lable,
        page: query.page,
      })
    );
  };

  useDebounce(
    () => {
      dispatch(
        newsAction.queryNews({
          ...query,
          debouncedTitle: query.title,
          page: query.title ? 1 : query.page,
        })
      );
    },
    2000,
    [query.title]
  );

  // Pagination
  const handlePrevPage = () => {
    dispatch(
      newsAction.queryNews({
        ...query,
        page: query.page - 1,
      })
    );
  };

  const handleNextPage = () => {
    dispatch(
      newsAction.queryNews({
        ...query,
        page: query.page + 1,
      })
    );
  };

  const handleReset = () => {
    dispatch(
      newsAction.queryNews({
        ...query,
        sort_by: "",
        sort_by_lable: "",
        title: "",
        debouncedTitle: "",
      })
    );
  };

  // Mobile view
  const handleFilterAndSorting = () => {};

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-teal-600 sm:text-3xl">
            News Collection
          </h2>
        </header>

        <div className="mt-8 block lg:hidden">
          <button
            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
            onClick={handleFilterAndSorting}
          >
            <span className="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            <div>
              <p className="block text-xs font-medium text-gray-700">Sort By</p>
              <div className="mt-1 space-y-2 flex">
                {/* Picklist */}
                <Picklist
                  placeholder={query.sort_by_lable || "Sort By"}
                  onChange={handleSort}
                  label="Sort By"
                  hideLabel
                  className="w-full"
                >
                  <Option
                    name="sort_by updated_at & order asc"
                    value="sort_by=updated_at&order=ASC"
                    label="Update, Oldest"
                  />
                  <Option
                    name="sort_by updated_at & order desc"
                    value="sort_by=updated_at&order=DESC"
                    label="Update, Newest"
                  />
                  <Option
                    name="sort_by created_at & order asc"
                    value="sort_by=created_at&order=ASC"
                    label="Create, Oldest"
                  />
                </Picklist>
              </div>
            </div>

            <div>
              <p className="block text-xs font-medium text-gray-700">Search</p>
              <div className="mt-1 space-y-2 flex">
                <Input.Search
                  placeholder="title"
                  name="title"
                  className="rainbow-p-around_medium w-full"
                  hideLable={true}
                  onChange={handleSearch}
                  value={query.title}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex h-full">
            <Card.News />
          </div>
        </div>

        <div className="mt-4 flex items-center">
          <div>
            {[query.sort_by, query.title, query.debouncedTitle].some(
              (value) => value !== ""
            ) && <Button.Reset onClick={handleReset} />}
          </div>
          {getNews.isFulfilled && getNews?.data?.data?.length ? (
            <div className="ml-auto flex">
              <Button.Pagination
                nextClick={handleNextPage}
                prevClick={handlePrevPage}
                page={getNews?.data?.metadata?.page}
                totalPage={getNews?.data?.metadata?.total_pages}
                disablePrev={getNews?.data?.metadata?.page === 1}
                disableNext={
                  getNews?.data?.metadata?.page ===
                  getNews?.data?.metadata?.total_pages
                }
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export const MoreAboutUs: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-teal-600 sm:text-3xl">
            {Content.Introduction[0].title}
          </h2>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li className="border border-solid border-teal-600">
            <div className="group relative block">
              <ul>
                {Content.Introduction[2].description.map(
                  (description: string, idx) => (
                    <li className=" m-2 flex items-start gap-x-2" key={idx}>
                      <IconContext.Provider
                        value={{
                          className: "w-4 h-4 text-gray-900",
                        }}
                      >
                        <SlPin />
                      </IconContext.Provider>

                      <p className="text-gray-900 text-sm leading-relaxed xs:text-xs">
                        {description}
                      </p>
                    </li>
                  )
                )}
              </ul>

              <div className="flex flex-col items-start justify-end p-6 z-50">
                <span className="mt-1.5 inline-block bg-teal-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  {Content.Introduction[1].title}
                </span>
              </div>
            </div>
          </li>

          <li className="border border-solid border-teal-600">
            <div className="group relative block">
              <ul>
                <li className=" m-2 flex items-start gap-x-2">
                  <IconContext.Provider
                    value={{
                      className: "w-4 h-4 text-gray-900",
                    }}
                  >
                    <SlPin />
                  </IconContext.Provider>
                  <p className="text-gray-900 text-sm leading-relaxed xs:text-xs">
                    {Content.Introduction[1].description[0]}
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-end p-6 z-50">
              <span className="mt-1.5 inline-block bg-teal-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                {Content.Introduction[2].title}
              </span>
            </div>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 border border-solid border-teal-600 h-fit">
            <div className="group relative block">
              <p className="text-justify mt-4 mx-4 text-gray-900 text-sm leading-relaxed xs:text-xs">
                {Content.Introduction[0].description[0]}
              </p>
              <div className="flex flex-col items-start justify-end p-6">
                <span className="mt-1.5 inline-block bg-teal-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  YAYASAN BALISANITYA SEJAHTERA
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
