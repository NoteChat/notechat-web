import { Link } from "nextra-theme-docs";
import { useEffect, useState } from 'react';
import { getCookie } from "../../utils";

export function ExtraContent() {
    const [content, setContent] = useState(<Link href="https://textops.app/#/login">Login</Link>);

    useEffect(() => {
        const uid = localStorage.getItem("uid");
        const username = getCookie("username");
        if (uid) {
            setContent(
                <>
                    <Link href="https://textops.app/#/chat">{username}</Link>
                </>
            );
        }
    }, [])

    return <div className="ml-10">{content}</div>;
}
