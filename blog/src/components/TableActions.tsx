import {EyeIcon,PencilIcon,TrashIcon} from "@heroicons/react/24/solid";
import * as React from "react";
import {router} from "@inertiajs/react";
export default function TableActions({handleAction,Item,viewEditOnly=false,editLink=false}) {
    const handleClick=function (event, type) {
        if ((type===1||type===2)&&editLink){
            if(type===1)
            router.visit(`forms/${Item.id}/edit`)
            else
                router.visit(`forms/${Item.id}/edit?show=1`)
        }else {
            handleAction(event, type)
        }
    };
    return (
        <div className="flex items-center space-x-3.5">
            <button className="hover:bg-gray-200 hover:rounded-2xl ml-2 p-1">
                <EyeIcon className="h-5 w-5 text-blue-500" onClick={event=>handleClick(Item,2)} />
            </button>
            <button className="hover:bg-gray-200 hover:rounded-2xl ml-2 p-1">
                <PencilIcon className="h-5 w-5 text-amber-500" onClick={event=>handleClick(Item,1)} />
            </button>
            {!viewEditOnly&&(
                <button className="hover:bg-gray-200 hover:rounded-2xl ml-2 p-1" onClick={event=>handleClick(Item,3)}>
                    <TrashIcon className="h-5 w-5 text-red-500"  />
                </button>
            )}

        </div>
    )
}