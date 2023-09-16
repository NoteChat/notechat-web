import { Link } from "nextra-theme-docs";
import { useEffect, useState } from 'react';
import { getCookie, listenCookieChange } from "../../utils";
import { useTranslation } from 'react-i18next';

export function ExtraContent() {
    const {t } = useTranslation();
    const [content, setContent] = useState(
        <span className="flex gap-1">
            <Link href="https://app.notechat.xyz/#/login">{t('Login')}</Link>
            |
            <Link className=" under-line-0" href="https://app.notechat.xyz/#/register">{t('Register')}</Link>
        </span>
    );

    useEffect(() => {
     
        listenCookieChange(({ oldValue, newValue }) => {
            const oldUsername = getCookie("username", oldValue);
            const username = getCookie("username", newValue);
            if (oldUsername !== username) {
                window.location.reload();
            }
        })

    }, [])

    useEffect(() => {
        const uid = getCookie("uid");
        if (uid) {
            setContent(
                <>
                    <Link href="https://app.notechat.xyz/#/chat">{t('enterApp')}</Link>
                </>
            );
        }
    }, [])

    return <div className="ml-10">{content}</div>;
}
