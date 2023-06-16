import  React, {  useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PrimaryButton from "./PrimaryButton";

export default function CreateWithModalButton({children,show,styles,title}:{
    children: React.ReactNode,
    show:boolean,
    styles:object,
    title:string
}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <PrimaryButton  className={`bg-indigo-600 h-10 text-white ${!show&&"hidden"}`} onClick={handleOpen}>{title}</PrimaryButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className={` border-0 rounded-md bg-white mx-auto	box-model `} sx={styles}>
                    {children}
                    <div className=" mx-auto text-center">
                        <PrimaryButton onClick={handleClose}  className=" mt-2 bg-gray-600  w-72 rounded border-[1.5px] border-stroke py-3 text-center font-medium ">
                            اغلاق
                        </PrimaryButton>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
