import React, {useRef,useState} from 'react';
import PrimaryButton from "../../components/PrimaryButton";
import CustomInput from "../CustomInput";
import Alert from "@mui/material/Alert/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import {BASE_URL, UPLOAD_URL} from "../../app/Constants";
import axios from "axios";
import {apiClient, CreateCategory, CreatePost} from "../../Util/apolloClient";

const CreateForm = ({edit, create, cat_id}: { edit: boolean, create: boolean, cat_id: string }) => {

    const url = create ? 'createCategory' : 'updateCategory';
    const submitBtn = useRef('save');
    const [openSnack, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("تم الحفظ");
    const [alertType, setAlertType] = useState("info");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [processing, setProcessing] = useState(false);

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleImageChange = (value: File) => {
        setImage(value);
        console.log(value);
        setAlertMessage('الرجاء الانتظار');
        setAlertType('info');
        setOpen(true)
        try {
            setProcessing(true);
            const body = new FormData();
            body.append("attachment", value);
            body.append("fpath", 'cdn\\uploads');
            const headers = {
                headers: {
                    'content-type': 'multipart/form-data',
                    // 'Authorization': `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`
                }
            };
            axios.put(UPLOAD_URL, body, headers)
                .then(response => {
                    console.log(response.data);
                    setImageUrl(response.data.data.path);
                    setProcessing(false);
                    setAlertMessage('تم الحفظ');
                    setAlertType('success');
                    setOpen(true)
                }).catch(xhr => {
                setAlertMessage('مشكله خلال الحفظ');
                setAlertType('error');
                setOpen(true)
                setProcessing(false);
            });

        } catch (err) {
            console.log(err)
            setProcessing(false);
            setAlertMessage('مشكله خلال الحفظ');
            setAlertType('error');
            setOpen(true)
            setProcessing(false);
        }
    };

    const submit = function (e) {
        e.preventDefault();
        setAlertMessage('الرجاء الانتظار');
        setAlertType('info');
        setOpen(true)
        try {
            setProcessing(true);
            apiClient.mutate({
                mutation: CreatePost,
                variables: {
                    name: name,
                    image: imageUrl,
                    desc: description,
                    category_id: cat_id,
                },
            }).then(response => {
                setAlertMessage('تم الحفظ');
                setAlertType('success');
                setOpen(true)
                setProcessing(false);
            }).catch(xhr => {
                console.log(xhr)
                setAlertMessage('مشكله خلال الحفظ');
                setAlertType('error');
                setOpen(true)
                setProcessing(false);
            });

        } catch (err) {
            console.log(err)
            setAlertMessage('مشكله خلال الحفظ');
            setAlertType('error');
            setOpen(true)
            setProcessing(false);
        }
    };
    return (

        <form onSubmit={submit}>
            <div className="grid lg:grid-cols-1 sm:gap-1 sm:grid-cols-1 mx-auto">

                <CustomInput title="العنوان" type="text" val={name} valName='name'
                             placeholder='0'
                             required={true}
                             edit={edit}
                             handleInputChange={setName}/>
                <CustomInput title="الوصف" type="textarea" val={name} valName='name'
                             placeholder='0'
                             required={true}
                             edit={edit}
                             handleInputChange={setDescription}/>
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
