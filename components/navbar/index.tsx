import { Link } from "nextra-theme-docs";
import { useEffect, useState } from 'react';
import { getCookie } from "../../utils";

export function ExtraContent() {
    const [content, setContent] = useState(<Link href="https://notechat.xyz/#/login">Login</Link>);

    useEffect(() => {
        const uid = localStorage.getItem("uid");
        const username = getCookie("username");
        if (uid) {
            setContent(
                <>
                    <Link href="https://app.notechat.xyz/#/chat">{username}</Link>
                </>
            );
        }
    }, [])

    return <div className="ml-10">{content}</div>;
}
