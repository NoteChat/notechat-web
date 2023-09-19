import { useEffect, useState } from "react";
import { getCookie, listenCookieChange } from "../../utils";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export function ExtraContent() {
    const { t } = useTranslation();
    const [content, setContent] = useState(
        <span className="flex gap-1">
            <Link
                className="text-indigo-500"
                href="https://app.notechat.xyz/#/login"
            >
                {t("Login")}
            </Link>
            |
            <Link
                className="text-indigo-500"
                href="https://app.notechat.xyz/#/register"
            >
                {t("Register")}
            </Link>
        </span>
    );

    useEffect(() => {
        listenCookieChange(({ oldValue, newValue }) => {
            const oldUsername = getCookie("username", oldValue);
            const username = getCookie("username", newValue);
            if (oldUsername !== username) {
                window.location.reload();
            }
        });
    }, []);

    useEffect(() => {
        const uid = getCookie("uid");
        const username = getCookie("username");

        if (uid) {
            setContent(
                <>
                    <Link
                        className="text-indigo-500"
                        href="https://app.notechat.xyz/#/chat"
                    >
                        {username}
                    </Link>
                </>
            );
        }
    }, []);

    return <div className="ml-10">{content}</div>;
}
