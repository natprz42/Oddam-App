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
            return;
        }
        if (!formInput.email){
            setFormError({
                ...inputError,
                email: "Wpisz poprawny adress email",
            });
            return;
        }
        if (formInput.confirmPassword !== formInput.password){
            setFormError({
                ...inputError,
                confirmPassword: "Hasła powinny być takie same"
            });
            return;
        }
        if (!formInput.password){
            setFormError({
                ...inputError,
                password: "Hasło nie powinno być puste"
            });
            return;
        }

        setFormError(inputError);
        setFormInput((prevState) => ({
            ...prevState,
            successMsg: "Konto zostało założone"
        }));
    }



    return (
        <div>
            <Navbar/>
            <div className="loginMain">
                <div className="contactTitle">
                    <h1>Zaloguj się</h1>
                    <img className="decoration2" src={Decoration} alt={"decoration"}/>
                </div>
                    <form className="loginFrom" onSubmit={validateFormInput}>
                        <div className="backgroundLogin">
                            <div className="loginEmail formSection2">
                                <label>Email</label>
                                <input type="email" name="email" value={formInput.email}
                                   onChange={({target}) =>
                                       handleUserInput(target.name, target.value)}/>
                                <p style = {{ color: "red", marginBottom: "20px"}}>{formError.email}</p>
                            </div>
                            <div className="loginPassword formSection2">
                                <label>Hasło</label>
                                <input type="password" name="password" value={formInput.password}
                                   onChange={({target}) =>
                                       handleUserInput(target.name, target.value)}/>
                                <p style = {{ color: "red", marginBottom: "20px"}}>{formError.password}</p>
                                <label>Powtórz hasło</label>
                                <input type="password" name="confirmPassword" value={formInput.confirmPassword}
                                   onChange={({target}) =>
                                       handleUserInput(target.name, target.value)}/>
                                <p style = {{ color: "red", marginBottom: "20px"}}>{formError.confirmPassword}</p>
                                <p style = {{ color: "green"}}>{formInput.successMsg}</p>
                            </div>
                        </div>
                        <div className="buttonLogin">
                            <button className="btn4">
                                <RouterLink to="/login">Zaloguj</RouterLink>
                            </button>
                            <button type="submit" className="btn4">Załóż konto</button>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default Registration;