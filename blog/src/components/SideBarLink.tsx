import React from 'react'
import { Link } from '@inertiajs/react';

export default function SideBarLink({children,title,linkKey,url,className}) {
    return (
        <React.Fragment>
            <Link
                key={linkKey}
                href={url}
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${className}`}>
                {children}
                {title}
            </Link>

            {/* <!-- Dropdown Menu End --> */}
        </React.Fragment>
    );
}