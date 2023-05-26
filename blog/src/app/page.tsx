'use client';
import HomeList from "../components/Home_list";

export default function Home() {
    const items=[{"title":"المقالات","color":"bg-lime-500","icon":0},
        {"title":"الامراض","color":"bg-amber-500","icon":1},{"title":"المواعيد","color":"bg-cyan-500","icon":2}];
    return (
            <div className="mt-1">
            <HomeList items={items}/>
            </div>
    )
}
