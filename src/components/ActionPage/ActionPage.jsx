import React, { useState, useEffect } from 'react';
import './ActionPage.scss';
import { Button, Modal, Form } from 'react-bootstrap';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const ActionPage = ({ showActionPage }) => {
    // handling show action page
    // const [show, setShow] = useState(false);
    const [show, setShow] = showActionPage;
    const [haveAnAccount, setHaveAnAccount] = useState(true);
    const [usersInformation, setUsersInformation] = useState([]);
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [validation, setValidation] = useState({
        fullName: false,
        email: false,
        password: false,
        confirmPassword: false,
    })

    useEffect(() => {
        const { fullName, email, password, confirmPassword } = userData;

        setValidation((prevValidation) => {
            if (fullName.length > 4 && fullName.length < 20)
                prevValidation = { ...prevValidation, fullName: true }
            else
                prevValidation = { ...prevValidation, fullName: false }

            if (email.includes('@') && email.substring(email.indexOf('.') + 1).length >= 2)
                prevValidation = { ...prevValidation, email: true }
            else
                prevValidation = { ...prevValidation, email: false }

            if (password.length > 6 && password.match(/[0-9]/g) && password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[@#$%&*]/g))
                prevValidation = { ...prevValidation, password: true }
            else
                prevValidation = { ...prevValidation, password: false }

            if (confirmPassword.length > 0 && confirmPassword === password)
                prevValidation = { ...prevValidation, confirmPassword: true }
            else
                prevValidation = { ...prevValidation, confirmPassword: false }

            return prevValidation;
        })
    }, [userData, usersInformation]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (event) => {
        const element = event.target;
        const name = event.target.name;
        setUserData((prevData) => {
            if (name === 'fullName')
                return { ...prevData, fullName: element.value }
            else if (name === 'email')
                return { ...prevData, email: element.value }
            else if (name === 'password')
                return { ...prevData, password: element.value }
            else
                return { ...prevData, confirmPassword: element.value }
        })
    }

    const handleSignUp = () => {
        const is_user_data_valid = Object.values(validation).every(data => data);
        if (is_user_data_valid) {
            setUsersInformation(prevUsersInfo => [...prevUsersInfo, userData]);
            setUserData({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
            handleClose();
        } else ;
    }

    const handleSignIn = () => {
        if (usersInformation.length > 0) {

            let isLoggedIn = false;

            usersInformation.forEach((userInfo) => {
                if (userInfo.email === userData.email && userInfo.password === userData.password) {
                    setUserData({
                        fullName: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    });
                    isLoggedIn = true;
                    handleClose();
                    alert("You are successfully logged in!");
                    return;
                }
            })

            if(!isLoggedIn) alert("Invalid Email and Password!");

        } else {
            alert("Invalid Email and Password!");
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Sign Up
            </Button> */}

            <Modal show={show} onHide={handleClose} className='actionPage__modal' centered>
                <Modal.Header className='actionPage__backgroundColor'>
                    <Modal.Title className='text-light'>{haveAnAccount ? 'Sign In' : 'Sign Up'}</Modal.Title>
                    <button className='actionPage__closeBtn' onClick={handleClose}>
                        <CloseRoundedIcon style={{ color: 'fff' }} />
                    </button>
                </Modal.Header>
                <Modal.Body className='actionPage__backgroundColor'>
                    <Form>
                        {!haveAnAccount && <div className='mb-3'>
                            <div className="input__group">
                                <AccountCircleRoundedIcon className='actionPage__inputIcon' />
                                <input type="text" name='fullName' placeholder='Full Name' value={userData.fullName} onChange={handleChange} />
                            </div>
                            {validation.fullName ? <p className='m-0 text-warning'>Looks Good!</p>
                                : <p className='m-0 text-danger'>Please, filled correct name!</p>}
                        </div>}

                        <div className="mb-3">
                            <div className="input__group">
                                <AlternateEmailRoundedIcon className='actionPage__inputIcon' />
                                <input type="email" name='email' placeholder='Email address' value={userData.email} onChange={handleChange} />
                            </div>
                            {validation.email ? <p className='m-0 text-warning'>Looks Good!</p>
                                : <p className='m-0 text-danger'>Please, filled correct email!</p>}
                        </div>

                        <div className="mb-3">
                            <div className="input__group">
                                <HttpsRoundedIcon className='actionPage__inputIcon' />
                                <input type="password" name='password' placeholder='Password' value={userData.password} onChange={handleChange} />
                            </div>
                            {validation.password ? <p className='m-0 text-warning'>Looks Good!</p>
                                : <p className='m-0 text-danger'>Password length should be greater than 6 and one uppercase, lowercase, number and special character!</p>}
                        </div>

                        {!haveAnAccount && <div className="mb-3">
                            <div className="input__group">
                                <HttpsRoundedIcon className='actionPage__inputIcon' />
                                <input type="password" name='confirmPassword' placeholder='Confirm Password' value={userData.confirmPassword} onChange={handleChange} />
                            </div>
                            {validation.confirmPassword ? <p className='m-0 text-warning'>Looks Good!</p>
                                : <p className='m-0 text-danger'>Please, filled correct password!</p>}
                        </div>}
                    </Form>
                    <Button
                        className='actionPage__submitBtn btn-outline mb-3'
                        onClick={haveAnAccount ? handleSignIn : handleSignUp}
                    >
                        {haveAnAccount ? 'Sign In' : 'Sign Up'}
                    </Button>
                    <div>
                        <p className='text-light text-center'>Already have an account?
                            <button
                                className='actionPage__signBtn'
                                onClick={() => setHaveAnAccount(!haveAnAccount)}
                            >
                                {haveAnAccount ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ActionPage;