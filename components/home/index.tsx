import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import productShort from '../../public/images/show_chat.jpg';
import Link from "next/link";


export const Banner: React.FC<{}> = () => {
    const { t } = useTranslation();
    return (
        <div className="h-[800px] text-center items-center flex justify-around flex-col mt-5 mb-5">
            <Image alt="NoteChat" src={productShort} width={500} height={500} />
            <div>
                <h1 className="text-center py-5 text-indigo-500 text-3xl">{t('bannerTitle')}</h1> 
                <p className="text-center py-5 text-gray-500 text-2xl pt-0">{t('bannerDesc')}</p>
            </div>
            <div>
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-[120px]">
                    <Link target="_blank" className="text-white" href={`https://app.notechat.xyz/#/login`} >
                        {t('Quick Start')}
                    </Link>
                </button>

                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ml-5 w-[120px]">
                    <Link className="text-white" href={`/download`} >
                        {t('Download')}
                    </Link>
                </button>
            </div>
        </div>
    );
};

export const Features: React.FC<{}> = () => {
    return (
        <div className="h-80 text-center items-center flex justify-center">
            <h1 className="text-center py-5 text-indigo-500 text-5xl">一款基于 AI 大模型的文本处理助手</h1> 
        </div>
    );
};
