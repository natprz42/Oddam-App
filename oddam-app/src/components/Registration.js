import React, {useState} from 'react';
import Navbar from "./Navbar";
import Decoration from "../assets/Decoration.png";
import {Link as RouterLink} from "react-router-dom";

const Registration = () => {

    const [formInput, setFormInput] =useState({
        email: "",
        password: "",
        confirmPassword: "",
        successMsg: ""
    })
    const [formError, setFormError] =useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleUserInput = (name,value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        })
    }
    const validateFormInput = (e) => {
        e.preventDefault();
        let inputError ={
            email: "",
            password: "",
            confirmPassword: ""
        };
        if (!formInput.email && !formInput.password){
            setFormError({
                ...inputError,
                email: "Wpisz poprawny adress email",
                password: "Wpisz hasło",
            });
            }
        if (formInput.confirmPassword !== formInput.password){
            setFormError({
                ...inputError,
                confirmPassword: "Hasła powinny być takie same"
            });
        }
        if (!formInput.password){
            setFormError({
                ...inputError,
                password: "Hasło nie powinno być puste"
            });
        }
    }



    return (
        <div>
            <Navbar/>
            <div className="loginMain">
                <div className="contactTitle">
                    <h1>Zaloguj się</h1>
                    <img className="decoration2" src={Decoration} alt={"decoration"}/>
                </div>
                <div className="backgroundLogin">
                    <form className="loginFrom" onSubmit={validateFormInput}>
                        <div className="loginEmail formSection2">
                            <label>Email</label>
                            <input type="email" value={formInput.email}
                                   onChange={({target}) =>
                                       handleUserInput(target.name, target.value)}/>
                            <p>{formError.email}</p>
                        </div>
                        <div className="loginPassword formSection2">
                            <label>Hasło</label>
                            <input type="password" value={formInput.password}
                                   onChange={({target}) =>
                                       handleUserInput(target.name, target.value)}/>
                            <p>{formError.password}</p>
                            <label>Powtórz hasło</label>
                            <input type="password" value={formInput.confirmPassword}
                                   onChange={({target}) =>
                                       handleUserInput(target.name, target.value)}/>
                            <p>{formError.confirmPassword}</p>
                            <p>{formInput.successMsg}</p>
                        </div>
                    </form>
                </div>
                <div className="buttonLogin">
                    <button className="btn4">
                        <RouterLink to="/registration">Załóż konto</RouterLink>
                    </button>
                    <button type="submit" className="btn4">Zaloguj</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;