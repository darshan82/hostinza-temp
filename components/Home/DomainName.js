import Image from "next/image";
import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function DomainName() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-light-gray w-full h-auto py-24">
      <div className="container w-full items-center mx-auto">
        <div className="w-full flex justify-between items-center h-auto ">
          <div className="w-[45%] border-box flex flex-col gap-4 items-start">
            <h2 className="text-start text-md font-medium">{t("Domain Names")}</h2>
            <h3 className="text-start text-3xl font-bold">
              {t("Give your idea a place to grow online.")}
            </h3>
            <p className="text-start font-light">
              {t(
                "Whether you want to keep it classic with a .com or get creative with .app or .guru, there’s no better place to find the perfect online home for your business or idea."
              )}
            </p>
            <button className="text-center border-2 border-black py-4 px-8">{t("Find Your Domain")}</button>
          </div>
          <div className="w-[50%] border-box">
            <img
              className="rounded-md"
              src="https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/All/7835912d-3aee-4820-a32d-d07e73a82a1f/img-feat-domains_v2.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="w-full flex justify-between items-center h-auto mt-8">
        <div className="w-[50%] border-box">
            <img
              className="rounded-md"
              src="https://img1.wsimg.com/cdn/Image/All/FOS-Intl/4/All/dd6f3ed2-0d52-4e13-976c-c699632adc15/76640_FTR_DomainUpdate76640_FTR_You.jpg"
              alt=""
            />
          </div>
          <div className="w-[45%] border-box flex flex-col gap-4 items-start">
            <h2 className="text-start text-md font-medium">{t("Domain Names")}</h2>
            <h3 className="text-start text-3xl font-bold">
              {t("Give your idea a place to grow online.")}
            </h3>
            <p className="text-start font-light">
              {t(
                "Whether you want to keep it classic with a .com or get creative with .app or .guru, there’s no better place to find the perfect online home for your business or idea."
              )}
            </p>
            <button className="text-center border-2 border-black py-4 px-8">{t("Find Your Domain")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
