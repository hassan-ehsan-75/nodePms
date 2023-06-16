'use client';
import Link from "next/link";
import * as React from "react";
import PostListItem from "./list_item";

export  default function PostList({items,category}:{items:Array<PostItemType>,category:string}) {
    return (
        <div className="grid grid-cols-1  gap-2">
            {items.map((item)=> {
                    return (
                        <Link  key={item._id} href={`/category/${category}/posts/${item._id}`}>
                            <PostListItem item={item}/>
                        </Link>
                    )
                }
            )}
        </div>
    );
}