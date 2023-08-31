import React from "react";
import style from "./style.module.css";

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
    return (
        <div className="h-[500px] mt-6 mb-10">
            <h2 className="text-center text-3xl pt-3 pb-8 font-bold">产品价格</h2>
            <div>
                {/* <script
                    async
                    src="https://js.stripe.com/v3/pricing-table.js"
                ></script>
                <stripe-pricing-table
                    pricing-table-id="prctbl_1NiBTNIUTzTMDrssOPeZN06m"
                    publishable-key="pk_live_51NXJ2pIUTzTMDrsskPwM3PXzTHP7FsK2q8qy4SJoZ03AwKMBhKePdAvtDHAEi1sKCzy6YHrsDn3NKEjd30QsRG6200qEYYAwaI"
                ></stripe-pricing-table> */}
<script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<stripe-pricing-table pricing-table-id="prctbl_1NkIJ1IUTzTMDrsssQVBqhfp"
publishable-key="pk_test_51NXJ2pIUTzTMDrssCWNtZebiCEQjrGc9zqTzPuHIdeYtSDog88Jiu4Dm7wGDdOEbF5IGvpijyQGDHV9blH6V5I8Z000T69LMdm">
</stripe-pricing-table>
            </div>
        </div>
    );

    
};
