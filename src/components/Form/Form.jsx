import { useState } from "react";
import validate from './validation';
// import style from './Form.module.css';


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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email<input type="text" name="email" value={userData.email} onChange={handleChange} /></label>
                    <p>{errors.email}</p>
                </div>
                <div>
                    <label>Password<input type="password" name="password" value={userData.password} onChange={handleChange} /></label>
                    <p>{errors.password}</p>
                </div>
                <input type="submit" name="submit" value='Log in'/>
            </form>
            <hr />
            <div>
                <button onClick={guest}>Continuar como invitado</button>
            </div>
        </div>
    );
}