import * as React from "react";

export default function CustomInput({...props}) {
   const handleInputChange=function (value) {

       if (props.indx||props.indx===0){
           console.log(props.indx)
           props.handleInputChange(value);
       }else {
           props.handleInputChange( value);
       }
    };
    return (
        <div key={props.key} className={props.topClassName}>
            <label className="font-semibold mb-1 mt-2 block font-medium text-black dark:text-white">
                {props.title}
            </label>
            {props.type!=="textarea"?
            <input

                type={props.type}
                required={props.required}
                disabled={!props.edit}
                value={props.val} onChange={e => handleInputChange( e.target.value)}
                placeholder={props.placeholder}
                className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${props.className}`}
            />
                :
                <textarea
                    required={props.required}
                    disabled={!props.edit}
                    rows={props.rows}
                    onChange={e => handleInputChange( e.target.value)}
                    placeholder={props.placeholder}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                >
                    {props.val}
                </textarea>
            }
        </div>

    );
}