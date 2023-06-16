import React, {useEffect, useRef, useState} from 'react';
import {Link} from '@inertiajs/react';
import {CubeIcon, EnvelopeIcon,UsersIcon,BriefcaseIcon,MinusCircleIcon,NewspaperIcon,RectangleStackIcon} from '@heroicons/react/24/solid';
import Logo from '../images/logo.png';
import SidebarLinkGroup from './SidebarLinkGroup';
import SideBarLink from "./SideBarLink";
import SideBarMenu from "./SideBarGroupMenu";

export default function Sidebar({sidebarOpen, setSidebarOpen}) {

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    );

    // close on click outside
    useEffect(() => {
        const clickHandler = ({target}) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({keyCode}) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector('body')?.classList.add('sidebar-expanded');
        } else {
            document.querySelector('body')?.classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);

    return (
        <aside
            ref={sidebar}
            className={`pt-3 absolute left-0 top-1 z-9999 flex h-screen w-60 flex-col overflow-y-hidden overflow-x-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex  items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <Link className="w-40" href={route('dashboard')}>
                    <img width="100%" src={Logo} alt="Logo"/>
                </Link>

                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>
            {/* <!-- SIDEBAR HEADER --> */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-2 py-2 px-4 lg:mt-9 lg:px-6 text-white">
                    {/* <!-- Menu Group --> */}
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold ">
                            الرئيسية
                        </h3>

                        <ul className="mb-6 flex flex-col gap-1.5">
                            {/* <!-- Menu Item Dashboard --> */}
                            <SidebarLinkGroup
                                activeCondition={
                                    false
                                }
                            >
                                {(handleClick, open) => {
                                    return (
                                        <SideBarLink linkKey="event" url={route('events.index')} title="الفعاليات">
                                            <CubeIcon className="w-6 h-6"/>
                                        </SideBarLink>
                                    );
                                }}
                            </SidebarLinkGroup>
                            <SidebarLinkGroup
                                activeCondition={
                                    true
                                }
                            >
                                {(handleClick, open) => {
                                    return (
                                        <SideBarLink title="المستخدمين" linkKey="user" url={route('users.index')}>
                                            <UsersIcon className="w-6 h-6"/>
                                        </SideBarLink>
                                    );
                                }}
                            </SidebarLinkGroup>
                            <SidebarLinkGroup
                                activeCondition={
                                    true
                                }>
                                {(handleClick, open) => {
                                    return (
                                        <SideBarLink title="اعدادات الايميل" linkKey="event-email-configs" url={route('event-email-configs.index')}>
                                            <EnvelopeIcon className="w-6 h-6"/>
                                        </SideBarLink>
                                    );
                                }}
                            </SidebarLinkGroup>

                            <SidebarLinkGroup>
                                {(handleClick, open) => {
                                    return (
                                        <React.Fragment>
                                           <SideBarMenu open={open} title="الورشات" linkKey='workshop-departments' onClick={(e) => {
                                               e.preventDefault();
                                               sidebarExpanded
                                               ? handleClick()
                                               : setSidebarExpanded(true);
                                           }}>
                                               <BriefcaseIcon  width="25" height="25" />
                                           </SideBarMenu>
                                            {/* <!-- Dropdown Menu Start --> */}
                                            <div
                                                className={`translate transform overflow-hidden ${
                                                !open && 'hidden'
                                                    }`}
                                            >
                                                <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pr-6">
                                                    <li>
                                                        <SideBarLink title="اقسام الورشات" linkKey="workshop-departments" url={route('workshop-departments.index')}
                                                                     className={({isActive}) =>
                                                                         (isActive && '!text-white')
                                                                     }>
                                                            <MinusCircleIcon className="w-3 h-3"/>
                                                        </SideBarLink>
                                                    </li>
                                                    <li>
                                                        <SideBarLink title="تصنيفات الاقسام" linkKey="workshop-department-categories" url={route('workshop-department-categories.index')}
                                                                     className={({isActive}) =>
                                                                         (isActive && '!text-white')
                                                                     }>
                                                            <MinusCircleIcon className="w-3 h-3"/>
                                                        </SideBarLink>
                                                    </li>
                                                    <li>
                                                        <SideBarLink title="الورشات" linkKey="workshops" url={route('workshops.index')}
                                                                     className={({isActive}) =>
                                                                         (isActive && '!text-white')
                                                                     }>
                                                            <MinusCircleIcon className="w-3 h-3"/>
                                                        </SideBarLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <!-- Dropdown Menu End --> */}
                                        </React.Fragment>
                                    );
                                }}
                            </SidebarLinkGroup>
                            <SidebarLinkGroup>
                                {(handleClick, open) => {
                                    return (
                                        <React.Fragment>
                                           <SideBarMenu open={open} title="النماذج" linkKey='forms' onClick={(e) => {
                                               e.preventDefault();
                                               sidebarExpanded
                                               ? handleClick()
                                               : setSidebarExpanded(true);
                                           }}>
                                               <NewspaperIcon  width="25" height="25" />
                                           </SideBarMenu>
                                            {/* <!-- Dropdown Menu Start --> */}
                                            <div
                                                className={`translate transform overflow-hidden ${
                                                !open && 'hidden'
                                                    }`}
                                            >
                                                <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pr-6">
                                                    <li>
                                                        <SideBarLink title="نماذج التسجيل" linkKey="events-forms" url={route('forms.index')}
                                                                     className={({isActive}) =>
                                                                         (isActive && '!text-white')
                                                                     }>
                                                            <MinusCircleIcon className="w-3 h-3"/>
                                                        </SideBarLink>
                                                    </li>
                                                    <li>
                                                        <SideBarLink title="بيانات نماذج التسجيل" linkKey="events-form-fields" url={route('form-fields.index')}
                                                                     className={({isActive}) =>
                                                                         (isActive && '!text-white')
                                                                     }>
                                                            <MinusCircleIcon className="w-3 h-3"/>
                                                        </SideBarLink>
                                                    </li>
                                                    <li>
                                                        <SideBarLink title="القوائم" linkKey="menus" url={route('menus.index')}
                                                                     className={({isActive}) =>
                                                                         (isActive && '!text-white')
                                                                     }>
                                                            <MinusCircleIcon className="w-3 h-3"/>
                                                        </SideBarLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <!-- Dropdown Menu End --> */}
                                        </React.Fragment>
                                    );
                                }}
                            </SidebarLinkGroup>
                            <SidebarLinkGroup>
                                {(handleClick, open) => {
                                    return (
                                        <React.Fragment>
                                           <SideBarMenu open={open} title="تهيئه البطاقات" linkKey='formCards' onClick={(e) => {
                                               e.preventDefault();
                                               sidebarExpanded
                                               ? handleClick()
                                               : setSidebarExpanded(true);
                                           }}>

                                               <RectangleStackIcon  width="25" height="25" />
                                           </SideBarMenu>
                                            {/* <!-- Dropdown Menu Start --> */}
                                            <div
                                                className={`translate transform overflow-hidden ${
                                                !open && 'hidden'
                                                    }`}
                                            >
                                                <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pr-6">
                                                    <li>
                                                        <SideBarLink title="البطاقات" linkKey="form-cards" url={route('form-cards.index')}
                                                                     className={({isActive}) =>
                                                                         (isActive && '!text-white')
                                                                     }>
                                                            <MinusCircleIcon className="w-3 h-3"/>
                                                        </SideBarLink>
                                                    </li>
                                                    <li>
                                                        <SideBarLink title="بيانات البطاقات" linkKey="form-cards-data" url={route('form-cards-data.index')}
                                                                     className={({isActive}) =>
                                                                         (isActive && '!text-white')
                                                                     }>
                                                            <MinusCircleIcon className="w-3 h-3"/>
                                                        </SideBarLink>
                                                    </li>

                                                </ul>
                                            </div>
                                            {/* <!-- Dropdown Menu End --> */}
                                        </React.Fragment>
                                    );
                                }}
                            </SidebarLinkGroup>

                        </ul>
                    </div>

                    {/* <!-- Others Group --> */}
                </nav>
                {/* <!-- Sidebar Menu --> */}
            </div>
        </aside>
    );
};