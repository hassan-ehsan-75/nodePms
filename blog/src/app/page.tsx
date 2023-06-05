'use client';
import * as React from "react";
import HomeList from "../components/Home_list";

export default function Home() {
    const items=[{key:"المقالات",title:"المقالات",color:"bg-lime-500",icon:0,url:'/category'},
        {key:"الامراض",title:"الامراض",color:"bg-amber-500",icon:1,url:'/insecticide'},
        {key:"المواعيد",title:"المواعيد",color:"bg-cyan-500",icon:2,url:'/yearly-crop'}];
    return (
            <div className="mt-1">
            <HomeList items={items}/>
            </div>
    )
}
