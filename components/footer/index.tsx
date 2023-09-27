import React from 'react'

export const Footer: React.FC<{}> = () => {
    const footerLinks = [
        {
            title: 'Github',
            href: 'https://github.com/notechat/notechat-web',
        },
        {
            title: '联系我们',
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