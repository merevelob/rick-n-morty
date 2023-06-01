import { useState } from "react";
import validate from './validation';
import style from './Form.module.css';


export default function Form(props) {
    const { login, guest } = props;

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
     
    function handleChange(event) {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [property]: value});
        setErrors(validate({...userData, [property]: value}));
    }

    function handleSubmit(event) {
        event.preventDefault();
        login(userData);
        /* setUserData({
            email: '',
            password: ''
        }); */
    }

    return (
        <div className={style.view}>
            <div className={style.contenedor}>
                <div className={style.contLogo}>
                    <img src={require("../../images/rym_portal.png")} alt="Portal" className={style.portal} />
                    <img src={require("../../images/rym_logo.png")} alt="Rick and Morty logo" className={style.logo} />
                </div>
                <div className={style.contForm}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.fieldEmail}>
                            <label>Email</label>
                            <input type="text" name="email" value={userData.email} onChange={handleChange} className={style.input} />
                            <div className={style.errorsEmail}>
                                <span>{errors.email}</span>
                            </div>
                        </div>
                        <div className={style.fieldPass}>
                            <label>Password</label>
                            <input type="password" name="password" value={userData.password} onChange={handleChange} className={style.input} />
                            <div className={style.errorsPass}>
                                <span>{errors.password}</span>
                            </div>
                        </div>
                        <input type="submit" name="submit" value='Log in' className={style.boton} />
                    </form>
                </div>
                <hr className={style.line} />
                <div className={style.contGuest}>
                    <button onClick={guest} className={style.boton}>Continuar como invitado</button>
                </div>
            </div>
        </div>
    );
}