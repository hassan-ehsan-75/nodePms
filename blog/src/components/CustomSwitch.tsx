import InputError from "../../../vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/Components/InputError";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Switch from "@mui/material/Switch/Switch";

export default function CustomSwitch({...props}) {
   const handleInputChange=function (value) {
        props.handleInputChange(props.valName,value==="true");
    };
    return (
        <div className={props.topClassName}>
            <div className="relative">
                <FormControlLabel className='m-switch' control={<Switch   checked={props.checked}
                                                                          onChange={e => handleInputChange( e.target.value)}
                                                                          disabled={props.disabled}
                                                                          inputProps={{ 'aria-label': 'controlled' }} value={props.val} />} label={props.title} />

                <InputError message={props.errors} className="mt-2" />
            </div>
        </div>

    );
}