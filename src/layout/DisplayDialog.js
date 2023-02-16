import React, {useContext, useEffect, useRef, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {GlobalContext} from "../store/Context";

let userKeyPress = [];

const DisplayDialog = () => {
    const {textFieldData, setTextFieldData} = useContext(GlobalContext)
    const [openModal, setOpenModal] = useState(false)
    const inputFocus = useRef(null);
    useEffect(() => {
        document.addEventListener('keydown', detectKeydown, true)
    }, [])
    const detectKeydown = (e) => {
        setTimeout(() => userKeyPress = [], 1000)
        if (e.key === "F2" || e.key === "F3") {
            e.preventDefault();
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
    const handleCloseDialog = () => {
        setOpenModal(false)
        setTextFieldData(null)
    };
    const onInputChange = (e) => {
        setTextFieldData(e.value)
    };

    return (
        <Dialog
            open={openModal}
            onClose={handleCloseDialog}
            maxWidth={"xs"}
            aria-labelledby="MUI-dialog"
            aria-describedby="Display a Dialog with ctrl+shift+f2"
            style={{backdropFilter: 'blur(5px)', WebkitBackdropFilter: ' blur(5px)'}}
        >
            <DialogTitle id="alert-dialog-title">
                {"You can focus on this text field with ctrl+shift+f3"}
            </DialogTitle>
            <DialogContent>
                <textarea style={{width: "100%"}} rows={6} placeholder="write something ... :)" ref={inputFocus}
                          onChange={e => onInputChange(e.target)}
                />
                {
                    textFieldData &&
                    <span style={{color: '#1D292E'}}><b>your text read from Context :</b>{textFieldData}</span>
                }
            </DialogContent>
            <DialogActions>
                <Button color={"error"} onClick={handleCloseDialog}>
                    close
                </Button>
                <Button onClick={handleCloseDialog}>
                    Save in your heart
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DisplayDialog;