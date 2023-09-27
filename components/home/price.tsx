import { useTranslation } from "react-i18next";

export default function Pricing() {
    const { t } = useTranslation();
    return (
        <div className="w-full pb-24 flex items-center justify-center">
            <div className="container">
                <div className="grid gap-6 items-center">
                    <div className="flex flex-col justify-center space-y-8 text-center">
                        <div className="space-y-2">
                            <h1 className="text-4xl tracking-tighter text-indigo-500">
                                {t('Price')}
                            </h1>
                            <p className="max-w-[600px] md:text-xl mx-auto text-gray-600">
                                {t('PriceDesc')}
                            </p>
                        </div>
                        <div className="w-full max-w-full space-y-8 mx-auto">
                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto">
                                    <thead className="justify-between">
                                        <tr className=" border">
                                            <th className="px-16  py-2">
                                                <span className="text-gray-500">
                                                    {t('Model')}
                                                </span>
                                            </th>
                                            <th className="px-16 py-2">
                                                <span className="text-gray-500">
                                                    {t('Context')}
                                                </span>
                                            </th>
                                            <th className="px-16 py-2">
                                                <span className="text-gray-500">
                                                    {t('promptHead')}
                                                </span>
                                            </th>
                                            <th className="px-16 py-2">
                                                <span className="text-gray-500">
                                                    {t('completeHead')}
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        <tr className=" border border-gray-200">
                                            <td className="px-16 py-2">
                                                GPT-3.5-Turbo
                                            </td>
                                            <td className="px-16 py-2">4K</td>
                                            <td className="px-16 py-2">
                                                Free
                                            </td>
                                            <td className="px-16 py-2">
                                                Free
                                            </td>
                                        </tr>
                                        <tr className=" border border-gray-200">
                                            <td className="px-16 py-2">
                                                GPT-3.5-Turbo
                                            </td>
                                            <td className="px-16 py-2">16K</td>
                                            <td className="px-16 py-2">
                                                $0.0036
                                            </td>
                                            <td className="px-16 py-2">
                                                $0.0048
                                            </td>
                                        </tr>
                                        <tr className=" border border-gray-200">
                                            <td className="px-16 py-2">
                                                GPT-4
                                            </td>
                                            <td className="px-16 py-2">8K</td>
                                            <td className="px-16 py-2">
                                                $0.036
                                            </td>
                                            <td className="px-16 py-2">
                                                $0.072
                                            </td>
                                        </tr>
                                        <tr className=" border border-gray-200">
                                            <td className="px-16 py-2">
                                                GPT-4
                                            </td>
                                            <td className="px-16 py-2">32K</td>
                                            <td className="px-16 py-2">
                                                $0.072
                                            </td>
                                            <td className="px-16 py-2">
                                                $0.144
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
