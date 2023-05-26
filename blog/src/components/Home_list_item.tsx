'use client';
import styles from '../app/page.module.css'
import {Paper} from "@mui/material";
import {Stream,Vaccines,InsertInvitation} from '@mui/icons-material/';

export default function HomeListItem(props) {
    const icons=[<Stream className={`fill-gray-300 ${styles.icon_home}`}/>,
        <Vaccines className={`fill-gray-300 ${styles.icon_home}`}/>,
        <InsertInvitation className={`fill-gray-300 ${styles.icon_home}`}/>];
    return (
            <Paper className={`grid grid-cols-2 p-6 ${props.color}`} elevation={3}>
                    <div>
                        <h4 className={`text-4xl font-medium font-bold`}>{props.title}</h4>
                    </div>
                    <div>
                        {icons[props.icon]}
                    </div>
            </Paper>
    );
}