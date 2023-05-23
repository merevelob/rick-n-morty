export default function validate(data) {
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passregex = /.*\d+.*/;

    let errors = {};

    if (!data.email) errors.email = 'Por favor ingresa tu email.';
    else if (data.email.length > 35) errors.email = 'No puede superar los 35 caracteres.';
    else if (!emailregex.test(data.email)) errors.email = 'Email inválido.';
    
    if (!data.password) errors.password = 'Por favor ingresa tu password.';
    else if (data.password.length < 6 || data.password.length > 10 || !passregex.test(data.password)) {
        errors.password = 'Debe contener de 6 a 10 caracteres incluyendo al menos un número';
    }
    
    return errors;
}