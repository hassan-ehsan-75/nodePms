import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import InputError from "./InputError";

const ITEM_HEIGHT = 42;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function MultipleSelectCheckmarks(props) {
    const handleChange = (value) => {
        props.handleInputChange(props.valName,value);
    };

    return (
        <div className={props.topClassName}>
            <FormControl sx={{  width: "18rem",marginTop:'1.9rem' }}>
                <InputLabel id="demo-multiple-checkbox-label" className="font-bold">{props.title}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    disabled={!props.edit}
                    value={props.val}
                    sx={{height:"2.6rem"}}
                    onChange={e=>handleChange(( e.target.value))}
                    input={<OutlinedInput label={props.title} />}
                    renderValue={(selected) => selected.map(obj=> {
                        const s=props.items.find(i=>{return i.id===parseInt(obj)});
                        if (s)
                        return s.name
                        else  return '';
                        }
                    ).join(", ")}
                    MenuProps={MenuProps}

                >
                    {props.items.map((item) => (
                        <MenuItem key={item.id} value={parseInt(item.id)}>
                            <Checkbox  disabled={!props.edit} checked={props.val.indexOf(parseInt(item.id)) > -1} />
                            <ListItemText primary={item.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <InputError message={props.errors} className="mt-2" />
        </div>
    );
}