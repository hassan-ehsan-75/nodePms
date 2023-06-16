'use client';
import Link from "next/link";
import * as React from "react";
import CategoryListItem from "./list_item";

export  default function CategoryList({items}:{items:Array<CategoryItemType>}) {
    return (
        <div className="grid grid-cols-2  gap-2">
            {items.map((item)=> {
                    return (
                        <Link  key={item.name} href={`/category/${item._id}/posts`}>
                            <CategoryListItem item={item}/>
                        </Link>
                    )
                }
            )}
        </div>
    );
}