import React from 'react'
import { useTranslation } from 'react-i18next'

export const Footer: React.FC<{}> = () => {
    const { t } = useTranslation();
    const footerLinks = [
        {
            title: 'Github',
            href: 'https://github.com/notechat/notechat-web',
        },
        {
            title: t('Contact'),
            href: 'mailto:support@notechat.xyz'
        }
    ]

    return (
        <div className="w-full flex gap-2 justify-end">
            {
                footerLinks.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className='hover:underline'>
                        {link.title}
                    </a>
                ))}
        </div>
    )
}