'use client';
import {CDN_URL} from "../../app/Constants";
import Image from "next/image";
import * as React from "react";
import {Paper} from "@mui/material";

export default function CategoryListItem({item}:{item:CategoryItemType}) {
    return (
            <Paper  key={item._id} className={` p-6 `} elevation={3}>
                <div>
                    <img
                        src={`${CDN_URL}/${item.image}`}
                        width={500}
                        height={300}
                        style={{    width: "33rem", height:"5rem"}}
                        alt="Picture of the author"
                    />
                </div>
                    <div>
                        <h4 className={`text-xl font-medium font-bold`}>{item.name}</h4>
                    </div>

            </Paper>
    );
}