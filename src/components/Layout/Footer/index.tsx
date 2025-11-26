"use client";
import { getImgPath } from "@/utils/imagePath";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { sections } from "../../../app/api/data";

const footerTitles = {
  features: "CaptionCore",
  resources: "Useful Links",
  platform: "Contact",
};

const Footer: FC = () => {
  const pathname = usePathname();
  console.log(pathname); // For debugging

  const bgImagePath = getImgPath("/images/footer/ftr-bg.png");

  return (
    <footer
      className={`relative dark:bg-darkmode bg-cover bg-no-repeat bg-center w-full h-full pt-8`}
      style={{ backgroundImage: `url(${bgImagePath})`, backgroundPosition: 'center 40px' }}
    >
      <div className="bg-secondary md:pb-20 pb-8">
        <div className="container">
          <div className="flex items-center justify-between pb-16 border-b border-dark_border border-solid">
            <Link href="/">
            </Link>
            <div>
              <ul className="flex items-center gap-5">
                <li>
                  <Link href="/" aria-label="Facebook">
                    <svg
                      width="26"
                      height="27"
                      fill="white"
                      viewBox="0 0 26 27"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/" aria-label="Twitter">
                    <svg
                      width="26"
                      height="27"
                      viewBox="0 0 26 27"
                      fill="#fff"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/" aria-label="LinkedIn">
                    <svg
                      width="26"
                      height="28"
                      viewBox="0 0 26 28"
                      fill="#fff"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 justify-items-center text-center">
            {Object.entries(sections).map(([sectionKey, items]) => (
              <div key={sectionKey} className="px-4">
                <p className="text-lg font-medium text-white pb-4">
                  {footerTitles[sectionKey as keyof typeof footerTitles]}
                </p>
                <ul>
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className="text-base font-normal text-SlateBlue leading-8 hover:text-white"
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
