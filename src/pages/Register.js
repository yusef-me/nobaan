import React, {useContext, useState} from 'react';
import "../assets/css/register.scss";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {GlobalContext} from "../store/Context";
import {Button, CircularProgress, IconButton} from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import OtpInput from "react-otp-input";
import {useHistory} from "react-router-dom";

const Register = () => {
    const {isValidation, setIsValidation} = useContext(GlobalContext)
    return (
        <div className="R-container">
            <div className="R-card">
                <a href="/">
                    <img className="R-card-logo" src="logo192.png" alt="react logo"/>
                </a>
                {isValidation.GoToVerification ? <Verification/> : <GetPhoneNumber/>}
            </div>
        </div>
    );
};

const GetPhoneNumber = () => {
    const [state, setState] = useState(false)
    const {isValidation, setIsValidation} = useContext(GlobalContext)
    const onChange = (number) => {
        !number.match(/^09\d+$/i) ?
            setIsValidation({errText: "Mobile number must start with 09", validation: false}) :
            number.length !== 11 ?
                setIsValidation({errText: "It must be 11 digits", validation: false}) :
                setIsValidation({errText: null, phoneNum: number, validation: true})
    }
    const onSubmit = e => {
        e.preventDefault();
        setState(true)
        setTimeout(() => setIsValidation({...isValidation, GoToVerification: true}), 500)
    }

    return (
        <form onSubmit={onSubmit} className="R-form-container">
            <label htmlFor="R-form-input">Enter your mobile number</label>
            <input onChange={e => onChange(e.target.value)} type="number" id="R-form-input" placeholder="mobile
            number" autoFocus/>
            <small className="R-err-text">{isValidation.errText}</small>
            <Button type="submit" variant="outlined" size="small" disabled={!isValidation.validation}>
                {state ? <CircularProgress style={{width: '1.5rem', height: '1.5rem'}} color="inherit"/> : 'submit'}
            </Button>
        </form>
    );
};

const Verification = () => {
    const [resetTimer, setResetTimer] = useState(0)
    const [otp, setOtp] = useState(new Array(4).fill(""))
    const {isValidation, setIsValidation} = useContext(GlobalContext)
    const history = useHistory();
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false
        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)])
        if (element.nextSibling) {
            element.nextSibling.focus()
        }
    }
    const correctPhoneNumber = () => {
        setTimeout(() => setIsValidation({
            ...isValidation,
            validation: null,
            phoneNum: null,
            GoToVerification: false
        }), 500);
    }
    const renderTime = ({remainingTime}) => {
        if (remainingTime === 0) {
            return (
                <IconButton color="primary" aria-label="delete" size="small" title="re send code!"
                            onClick={() => setResetTimer(prevKey => prevKey + 1)}>
                    <AutorenewIcon fontSize="inherit"/>
                </IconButton>
            );
        }

        return <div className="timer-value">{remainingTime}</div>
    };
    const onSubmit = () => {
        history.goBack();
    }

    return (
        <div className="R-verification-container">
            <small className="R-verification-container-label">Enter your verification code</small>
            <div className="R-verification-OTP">
                {
                    otp.map((data, index) => <input value={data}
                                                    className="R-OTP-field"
                                                    type="text"
                                                    maxLength="1"
                                                    key={index}
                                                    onFocus={e => e.target.select()}
                                                    onChange={e => handleChange(e.target, index)}
                                                    autoFocus={index === 0}/>)
                }
            </div>
            <CountdownCircleTimer
                key={resetTimer}
                isPlaying
                size={50}
                strokeWidth={4}
                duration={60}
                colors={"#61DAFB"}
                onComplete={() => ({delay: 1})}
            >
                {renderTime}
            </CountdownCircleTimer>
            <a className="R-verification-editPhone-btn" onClick={correctPhoneNumber}>correct phone number</a>
            <div className="R-verification-OTP-button-container">
                <Button variant="outlined" size="small" color="error"
                        onClick={e => setOtp([...otp.map(v => "")])}>clear</Button>
                <Button variant="outlined" size="small" color="success" onClick={onSubmit}
                        disabled={otp.join("").length < 4}>verify</Button>
            </div>
        </div>
    );
};

export default Register;