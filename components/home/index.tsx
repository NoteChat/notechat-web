import React from "react";
import style from "./style.module.css";
import classNames from "classnames";


export const Banner: React.FC<{}> = () => {
    return (
        <div className=" h-3/4 text-center items-center flex justify-center">
            <h1 className="text-center py-5 text-indigo-500 text-5xl">一款基于 AI 大模型的文本处理助手</h1> 
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