import React from 'react'
import { useTranslation } from 'react-i18next'
import style from './style.module.css'
import Link from 'next/link';

export const Footer: React.FC<{}> = () => {
    const { t } = useTranslation();
    const footerLinks = [{
        title: t('Tutorials'),
        href: '/document/tutorials',
    },
    {
        title: 'Github',
        href: 'https://github.com/notechat/notechat-web',
    }, {
        title: t('Prompt Templates'),
        href: '/document/tutorials',
    },
    {
        title: t('Contact'),
        href: 'mailto:support@notechat.xyz'
    }
    ]

    return (
        <div className={style.footer}>
            {
                footerLinks.map((link, index) => (
                    <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer" className='hover:underline'>
                        {link.title}
                    </Link>
                ))}
        </div>
    )
}