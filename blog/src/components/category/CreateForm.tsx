import React, {useRef} from 'react';
import PrimaryButton from "../../components/PrimaryButton";
import CustomInput from "../CustomInput";
import Alert from "@mui/material/Alert/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import {BASE_URL, UPLOAD_URL} from "../../app/Constants";
import axios from "axios";

const CreateForm = ({edit, create, currentCat}: { edit: boolean, create: boolean, currentCat: object }) => {

    const url = create ? 'createCategory' : 'updateCategory';
    const submitBtn = useRef('save');
    const [openSnack, setOpen] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("تم الحفظ");
    const [alertType, setAlertType] = React.useState("info");
    const [name, setName] = React.useState("");
    const [image, setImage] = React.useState(null);
    const [imageUrl, setImageUrl] = React.useState('');
    const [processing, setProcessing] = React.useState(false);

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleImageChange = (value: File) => {
        setImage(value);
        console.log(value);
        try {
            setProcessing(true);
            const body = new FormData();
            body.append("attachment",value);
            body.append("fpath", 'cdn\\uploads');
            const headers = {
                headers: {
                    'content-type': 'multipart/form-data',
                    // 'Authorization': `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`
                }};
            axios.put(UPLOAD_URL, body, headers)
                .then(response => {
                    console.log(response.data);
                setImageUrl(response.data.data.path);
                setProcessing(false);
            }).catch(xhr => {

            });

        } catch (err) {
            console.log(err)
            setProcessing(false);

        }
    };

    const submit = function (e) {
        e.preventDefault();

        try {
            setProcessing(true);

            const headers3 = {
                'content-type': 'application/json',
                // 'Authorization': `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`
            };
            const requestBody = {
                query: `mutation{createCategory(name:"${name}",image:"${imageUrl}"){name image }}`,
            };
            const options = {
                method: 'POST',
                headers3,
                body: JSON.stringify(requestBody)
            };
            fetch(BASE_URL, options).then(response => {
                setProcessing(false);
                setAlertMessage('تم الحفظ');
                    setAlertType('success');
                setOpen(true)
                setProcessing(false);
            }).catch(xhr => {
                setAlertMessage('مشكله خلال الحفظ');
                setAlertType('error');
                setOpen(true)
                setProcessing(false);
            });

        } catch (err) {
            console.log(err)
        }
        };
    return (

        <form onSubmit={submit}>
            <div className="grid lg:grid-cols-2 sm:gap-1 sm:grid-cols-1 mx-auto">

                <CustomInput title="الاسم" type="text" val={name} valName='name'
                             placeholder='0'
                             required={true}
                             edit={edit}
                             handleInputChange={setName}/>
                <div className="col-span-2 grid grid-cols-2 gap-1 mt-2">
                    <div>
                        <label className="font-semibold mb-1 mt-2 block font-medium text-black dark:text-white">
                            الصورة
                        </label>

                        <input
                            type="file"
                            required={!edit}
                            disabled={!edit}
                            onChange={e => handleImageChange(e.target.files[0])}
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"

                        />
                    </div>
                </div>


            </div>
            <div className=" mx-auto text-center">
                <PrimaryButton disabled={processing} ref={submitBtn} type="submit"
                               className={`mt-2 bg-indigo-600  w-72 rounded border-[1.5px] border-stroke py-3 text-center font-medium ${!edit && 'hidden'}`}>
                    {processing ? "الرجاء الانتظار" : " حفظ"}
                </PrimaryButton>
            </div>
            <Snackbar
                open={openSnack}
                autoHideDuration={60000}
                onClose={handleCloseSnack}
                sx={{
                    width: "25%",
                    direction: "ltr"
                }}>
                <Alert onClose={handleCloseSnack} severity={alertType}
                       sx={{width: '100%', fontFamily: "Noto Kufi Arabic", fontWeight: "bold"}}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </form>


    );
};

export default CreateForm;
