import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

import { SlLocationPin } from "react-icons/sl";
import * as Assets from "../utils/assets";
import Image from "../helpers/LazyLoad";
import * as Content from "../lib/content";
// import Tooltip from "./Tooltip";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5">
      <div className="relative block h-32 xs:h-full lg:col-span-2 lg:h-full">
        <iframe
          title="Balisanitya location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7899.089942719714!2d115.051077!3d-8.147717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd19b62114c022d%3A0x359ad10ce5b7031f!2sLPK%20Bali%20Sanitya%20Sejahtera!5e0!3m2!1sid!2sid!4v1702472807352!5m2!1sid!2sid"
          loading="lazy"
          className="h-full w-full xs:h-[464.8px] border-0"
        ></iframe>
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500">
                {" "}
                Call us{" "}
              </span>

              <a
                href="#"
                className="block text-2xl font-medium text-gray-700 hover:opacity-75 sm:text-3xl"
              >
                0361-2096131
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              {[
                "Jalan Raya Anturan Perum Mustika Laksmi",
                "Gang. 1 No.1 Buleleng",
                "Bali",
              ].map((location, idx) => (
                <li className={idx === 0 ? "flex items-center gap-x-1" : ""}>
                  {idx === 0 ? (
                    <>
                      <IconContext.Provider
                        value={{
                          className: "w-3 h-3 text-gray-700",
                        }}
                      >
                        <SlLocationPin />
                      </IconContext.Provider>
                      {location}
                    </>
                  ) : (
                    location
                  )}
                </li>
              ))}
            </ul>

            {/* <ul className="mt-8 flex gap-6">
              {Content.Footer.mediaSocial.map((media) => (
                <Tooltip description="can't access.">
                  <li>
                    <Link
                      to={media.url}
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <IconContext.Provider
                        value={{
                          className: "w-6 h-6 text-gray-700",
                        }}
                      >
                        {media.icon}
                      </IconContext.Provider>
                    </Link>
                  </li>
                </Tooltip>
              ))}
            </ul> */}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-700">Company Group</p>

              <ul className="mt-6 grid gap-4 grid-cols-3 grid-rows-3">
                {Content.Footer.componyGroups.map((compony) => (
                  <li className="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <Link
                      to={compony.website}
                      className="text-gray-700"
                      target="_blank"
                    >
                      <Image
                        src={compony.image}
                        className={"w-[48px] h-[48px]"}
                        alt={compony.alt}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-700">Supported By</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex flex-col gap-y-2">
                  <Image
                    src={Assets.Image.kopitu}
                    className="w-[100px] h-[100px]"
                  />
                  <Link
                    to="https://kopitu.co.id/"
                    className="text-gray-700 transition hover:opacity-75"
                    target="_blank"
                  >
                    Komite Pengusaha Mikro Kecil Menengah Indonesia Bersatu
                    (KOPITU)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              {["Terms & Conditions", "Privacy Policy", "Cookies"].map(
                (rule) => (
                  <li>
                    <Link
                      to="#"
                      className="text-teal-600 transition hover:opacity-75"
                    >
                      {rule}
                    </Link>
                  </li>
                )
              )}
            </ul>

            <p className="mt-8 text-xs text-gray-700 sm:mt-0">
              &copy; 2023. BALISANITYA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
