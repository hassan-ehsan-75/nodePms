import React from 'react'
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import {BrowserRouter, Link} from "react-router-dom";

export default function SideBarGroup({children,title,linkKey,onClick,open}) {
    const  handleClick=function (e) {
        onClick(e);
    };
    return (
        <BrowserRouter>
        <React.Fragment>
            <Link
                to="#"
                key={linkKey}
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 `}
                onClick={handleClick}
            >
                {children}
                {title}
                <ArrowDownIcon  width="20" height="20"
                                className={`absolute left-4 top-1/2 -translate-y-1/2 fill-current ${
                                open && 'rotate-180'
                                    }`} />
            </Link>
            {/* <!-- Dropdown Menu End --> */}
        </React.Fragment>
        </BrowserRouter>
    );
}