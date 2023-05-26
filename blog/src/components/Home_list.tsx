'use client';
import HomeListItem from "./Home_list_item";
import styles from '../app/page.module.css'
import {Box, Paper, Grid} from "@mui/material";

export  default function HomeList(props) {
    const {items} =props;
    return (
        <div className="grid grid-cols-1  gap-2">
            {items.map((item)=> <HomeListItem title={item.title} icon={item.icon} color={item.color} key={item.title} /> )}
        </div>
    );
}