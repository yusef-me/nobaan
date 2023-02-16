import React, {useEffect, useRef, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

var userKeyPress = []

const DisplayDialog = () => {
    const [openModal, setOpenModal] = useState(false)
    const [focus, setFocus] = useState(false)
    const inputFocus = useRef(null);
    useEffect(() => {
        document.addEventListener('keydown', detectKeydown, true)
    }, [])
    const detectKeydown = (e) => {
        setTimeout(() => userKeyPress = [], 1000)
        if (e.key === "F2" || e.key === "F3") {
            e.preventDefault();
            console.log('yeees')
        }
        if (["Control", "Shift", "F2", "F3"].includes(e.key)) {
            userKeyPress.push(e.key)
        }
        if (["Control", "Shift", "F2"].join() === userKeyPress.join()) {
            setOpenModal(true)
            userKeyPress = []
        }
        if (["Control", "Shift", "F3"].join() === userKeyPress.join()) {
            inputFocus.current.focus();
        }
    }
    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <Dialog
            open={openModal}
            onClose={handleClose}
            maxWidth={"xs"}
            aria-labelledby="MUI-dialog"
            aria-describedby="Display a Dialog with ctrl+shift+f2"
            style={{'backdrop-filter': 'blur(5px)', '-webkit-backdrop-filter': ' blur(5px)'}}
        >
            <DialogTitle id="alert-dialog-title">
                {"You can focus on this text field with ctrl+shift+f3"}
            </DialogTitle>
            <DialogContent>
                <textarea style={{width: "100%"}} rows={6} placeholder="write something ... :)" ref={inputFocus}/>
            </DialogContent>
            <DialogActions>
                <Button color={"error"} onClick={handleClose}>
                    close
                </Button>
                <Button onClick={handleClose}>
                    Save in your heart
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DisplayDialog;