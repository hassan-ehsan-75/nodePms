import { Link } from '@inertiajs/react';;

export default function Pagination(props) {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{props.from}</span> to <span className="font-medium">{props.to}</span> of{' '}
                        <span className="font-medium">{props.total}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm border" aria-label="Pagination">

                        {
                            props.links.map(function (link) {

                            return (
                                link.url?
                                <Link key={link.label}
                                    href={link.url}
                                    aria-current="page"
                                    className={`relative z-10 inline-flex items-center ${link.active?'bg-indigo-600 text-white':'text-black'} px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                >
                                    <span dangerouslySetInnerHTML={{__html:link.label}} />
                                </Link>
                                    :
                                    <span key={link.label}
                                        className={`relative z-10 inline-flex items-center ${link.active?'bg-indigo-600 text-white':'black'} px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                    >
                                        <span dangerouslySetInnerHTML={{__html:link.label}} />
                                    </span>
                            )
                        })
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}
