import  React, {  useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PrimaryButton from "./PrimaryButton";


export default function ShowEditModal({children,open,handleClose,...props}){

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="border-0 rounded-md	box-model"  sx={props.styles}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.title}
                    </Typography>
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
