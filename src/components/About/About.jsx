import { mycard } from "./mycard";
import Card from "../Card/Card";
import style from "./About.module.css";

export default function About() {
    const { id, name, status, species, gender, origin, image } = mycard;
    
    return (
        <div className={style.mycard}>
            <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin}
                image={image}
            />
        </div>
    );
}