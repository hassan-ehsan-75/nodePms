'use client';
import * as React from "react";
import styles from '../app/page.module.css'
import {Paper} from "@mui/material";
import {Stream,Vaccines,InsertInvitation} from '@mui/icons-material/';

export default function HomeListItem({item}:{item:ItemType}) {
    const icons=[
        <Stream key={1} className={`fill-gray-300 ${styles.icon_home}`}/>,
        <Vaccines key={2} className={`fill-gray-300 ${styles.icon_home}`}/>,
        <InsertInvitation key={3} className={`fill-gray-300 ${styles.icon_home}`}/>
    ];
    return (
            <Paper key={item.key} className={`grid grid-cols-2 p-6 ${item.color}`} elevation={3}>
                    <div>
                        <h4 className={`text-4xl font-medium font-bold`}>{item.title}</h4>
                    </div>
                    <div>
                        {icons[item.icon]}
                    </div>
            </Paper>
    );
}