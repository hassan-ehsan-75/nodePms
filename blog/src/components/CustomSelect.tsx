import InputError from "../../../vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/Components/InputError";
import * as React from "react";

export default function CustomSelect({...props}) {
   const handleInputChange=function (value) {
        props.handleInputChange(props.valName,value);
    };
    return (
        <div className={props.topClassName}>
            <label className="font-semibold mb-1 mt-2 block font-medium text-black dark:text-white">
                {props.title}
            </label>
            <select
                required={props.required}
                disabled={!props.edit}
                dir="rtl"
                multiple={props.multi}
                name={props.multi?`${props.valName}[]`:`${props.valName}`}
                value={props.val} onChange={e => handleInputChange( e.target.value)}
                className="w-full text-center rounded-lg border-[1.5px] border-stroke  py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            >
                {
                    props.hasOtherOption&& <option key={0} value={0}>اختر</option>
                }
                {props.items.map(function (item) {
                    return (
                      <option key={item.id} value={item.id} >{item.name}</option>
                    );
                })}
            </select>
            {props.errors!==false &&
            <InputError message={props.errors} className="mt-2" />
            }
        </div>

    );
}