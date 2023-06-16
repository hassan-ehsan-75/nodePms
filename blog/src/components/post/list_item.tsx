'use client';
import {CDN_URL} from "../../app/Constants";

import * as React from "react";
import {Paper} from "@mui/material";

export default function PostListItem({item}:{item:PostItemType}) {
    return (
            <Paper  key={item._id} className={` p-6 `} elevation={3}>
                <div>
                    <img
                        src={`${CDN_URL}/${item.attachment}`}
                        width={500}
                        height={300}
                        style={{    width: "33rem", height:"12rem"}}
                        alt="Picture of the author"
                    />
                </div>
                    <div>
                        <h4 className={`text-xl font-medium font-bold`}>{item.title}</h4>
                    </div>

            </Paper>
    );
}