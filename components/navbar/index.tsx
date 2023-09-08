import { Link } from "nextra-theme-docs";
import { useEffect, useState } from 'react';

export function ExtraContent() {
    const [content, setContent] = useState(<Link href="https://textops.app/#/login">Login</Link>);

    useEffect(() => {
        const uid = localStorage.getItem("uid");
        if (uid) {
            setContent(
                <>
                    <Link href="https://textops.app/#/chat">Chat</Link>
                    <Link href="https://textops.app/#/logout">Logout</Link>
                </>
            );
        }
    }, [])

    return <div className="ml-10">{content}</div>;
}
