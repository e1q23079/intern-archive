import { useEffect, useState } from "react";
import statusBarImg from "../assets/status-bar-in-skill.png";
import styles from "./status-bar.css";

const StatusBar = () => {

    const [skill, setSkill] = useState("null");

    useEffect(() => {

        const requestOptions = {
            method: "GET",
            redirect: "follow" as RequestRedirect,
        };

        fetch("https://api.github.com/users/e1q23079", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => setSkill(result.public_repos))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <img src={statusBarImg} className={styles.statusBar} alt="status-bar" draggable={false} />
            <div className={`${styles.grid} ${styles.statusText}`}>
                <div className={styles.skill}>{skill}</div>
                <div>Q23079</div>
            </div>
        </>
    )
};

export default StatusBar;