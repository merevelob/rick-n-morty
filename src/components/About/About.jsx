import { useNavigate } from "react-router-dom";
import { mycard } from "./mycard";
import Card from "../Card/Card";
import style from "./About.module.css";

export default function About(props) {
    const navigate = useNavigate();
    
    const { onClose } = props;
    
    function myOnClose(id) {
        onClose(id);
        navigate('/home');
    }

    const { id, name, status, species, origin, image } = mycard;
    
    return (
        <div className={style.mycard}>
            <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                origin={origin}
                image={image}
                onClose={myOnClose}
            />
        </div>
    );
}