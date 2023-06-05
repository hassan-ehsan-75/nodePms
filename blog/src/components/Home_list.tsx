'use client';
import Link from "next/link";
import * as React from "react";
import HomeListItem from "./Home_list_item";

export  default function HomeList({items}:{items:Array<ItemType>}) {
    return (
        <div className="grid grid-cols-1  gap-2">
            {items.map((item)=> {
                return (
                    <Link  key={item.title} href={item.url}>
                    <HomeListItem item={item}/>
                    </Link>
                )
                }
            )}
        </div>
    );
}