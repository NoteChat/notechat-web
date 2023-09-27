import { useTranslation } from "react-i18next";
import '@vscode/codicons/dist/codicon.css'

export default function Features() {
    const { t } = useTranslation();
    return (
        <div className="w-full py-20 flex items-center justify-center">
            <div className="container">
                <div className="grid gap-6 items-center">
                    <div className="flex flex-col justify-center space-y-8 text-center">
                        <div className="space-y-2ß">
                            <h1 className="text-4xl tracking-tighter text-indigo-500">
                                {t('Features')}
                            </h1>
                            <p className="max-w-[600px] md:text-xl mx-auto text-gray-500">
                                {t('FeaturesDescription')}
                            </p>
                        </div>
                        <div className="w-full max-w-full space-y-4 mx-auto">
                            <div className="grid grid-cols-4 gap-8">
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                    <div className="p-2 bg-indigo-500 rounded-full">
                                        <div className='codicon codicon-comment-discussion text-white'></div>
                                    </div>
                                    <h2 className="text-xl font-bold">
                                        {t('Chat')}
                                    </h2>
                                    <p className="">
                                        {
                                            t("ChatDesc")
                                        }
                                    </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                    <div className="p-2 bg-indigo-500 rounded-full">
                                        <div className='codicon codicon-edit text-white'></div>
                                    </div>
                                    <h2 className="text-xl font-bold ">
                                        {t('Docs')}
                                    </h2>
                                    <p className="">
                                        {t('DocsDesc')}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                    <div className="p-2 bg-indigo-500 rounded-full">
                                        <div className='codicon codicon-star-full text-white'></div>
                                    </div>
                                    <h2 className="text-xl font-bold ">
                                        {t('Star')}
                                    </h2>
                                    <p className="">
                                        {t('StarDesc')}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                    <div className="p-2 bg-indigo-500 rounded-full">
                                        <div className='codicon codicon-extensions text-white'></div>
                                    </div>
                                    <h2 className="text-xl font-bold ">
                                        
                                        {t('Plugin')}
                                    </h2>
                                    <p className="">
                                        {t('PluginDesc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
