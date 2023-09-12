import React, { useEffect } from "react";
import Script from "next/script";
import { getCookie } from "../../utils";
import { useTranslation } from "react-i18next";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "stripe-pricing-table": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}

export const Price: React.FC<{}> = () => {
    const tableId = process.env.NEXT_PUBLIC_STRIPE_TABLE_ID;
    const tableKey = process.env.NEXT_PUBLIC_STRIPE_TABLE_KEY;
    const [email, setEmail] = React.useState("");
    const [uid, setUid] = React.useState("");

    const { t } = useTranslation()

    useEffect(() => {
        const em = getCookie('username')
        const uid = getCookie('uid')
        setEmail(em)
        setUid(uid)
    }, [])

    return (
        <div className="h-[800px] mt-6 mb-10">
            <h2 className="text-center text-3xl pt-3 pb-8 font-bold">
                {t('productPrice.title')}
            </h2>
            <div>
                <Script
                    id="stripe"
                    async
                    src="https://js.stripe.com/v3/pricing-table.js"
                ></Script>
                {
                    email ? 
                    <stripe-pricing-table
                        pricing-table-id={tableId}
                        publishable-key={tableKey}
                        customer-email={email}
                        client-reference-id={uid}
                    ></stripe-pricing-table>
                    : null
                }
            </div>
        </div>
    );
};
