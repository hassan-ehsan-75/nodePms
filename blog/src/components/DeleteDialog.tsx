import {DialogContentText, Button,  DialogTitle} from "@mui/material";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import {router} from '@inertiajs/react'
import Slide from "@mui/material/Slide/Slide";
import React from "react";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import Alert from "@mui/material/Alert/Alert";



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function  DeleteDialog({open,handleClose,event,url}) {
    const [openSnack, setOpen] = React.useState(false);
    const [onProgress, setOnProgress] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const close=function () {
        handleClose();
    };
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handelDelete=function () {
        setOnProgress(true);
        router.delete(`${url}/${event?event.id:''}`,{
            onSuccess: () => {
            return Promise.all([
                handleClick(),
                handleClose(),
                setOnProgress(false)
            ])
        }})
    };
    return(
        <div>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={handleClose}
            className='delete_dialog'
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle className="delete_dialog" id="alert-dialog-title ">
                حذف
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" className="w-80 delete_dialog">
                    هل انت متأكد من الحذف؟
                </DialogContentText>
            </DialogContent>
            <DialogActions >
                <Button className="mr-3 delete_dialog" disabled={onProgress} onClick={close}>لا</Button>
                <Button className="mr-3 delete_dialog" disabled={onProgress} onClick={handelDelete}>نعم</Button>

            </DialogActions>

        </Dialog>
        <Snackbar
            open={openSnack}
            autoHideDuration={6000}
            onClose={handleCloseSnack}
            message="تم الحذف"
            sx={{width: "20%",
                direction: "ltr"}}
        >
            <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%',fontFamily:"Noto Kufi Arabic",fontWeight:"bold" }}>
                تم الحذف
            </Alert>
        </Snackbar>
        </div>
    );
}