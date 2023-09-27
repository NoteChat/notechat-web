import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import productShort from "../../public/images/show_chat.jpg";
import Link from "next/link";

export const Banner: React.FC<{}> = () => {
    const { t } = useTranslation();
    return (
        <div className="text-center items-center flex justify-start flex-col">
            <section className="mt-20">
                <h1 className="text-center text-indigo-500 text-5xl font-bold ">
                    {t("bannerTitle")}
                </h1>
            </section>
            <section className="text-center py-8 text-gray-500 text-2xl">
                {t("bannerDesc")}
            </section>
            <section className="pb-10">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-[150px]">
                    <Link
                        target="_blank"
                        className="text-white"
                        href={`https://app.notechat.xyz/#/login`}
                    >
                        {t("Login Web")}
                    </Link>
                </button>

                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ml-5 w-[150px]">
                    <Link className="text-white" href={`/download`}>
                        {t("Download")}
                    </Link>
                </button>
            </section>
        </div>
    );
};

export function Video() {
    return (
        <div className="text-center items-center flex justify-center mt-16">
            <div className="container flex items-center justify-center">
                <section className="w-[52rem] h-[30rem] rounded-md">
                    <video id="my-video" className="w-full h-full" controls preload="auto">
                        <source src={`/video/intro.mp4`} type="video/mp4" />
                    </video>
                </section>
            </div>
        </div>
    );
}
