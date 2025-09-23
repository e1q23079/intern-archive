import { useEffect, useState } from "react";
import statusBarImg from "../assets/status-bar-on-skill.png";
import styles from "./status-bar.css";

const StatusBar = () => {

    const [skill, setSkill] = useState("null");

    const [name, setName] = useState("null");

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
            .then((result) => {
                setSkill(result.public_repos);
                setName(result.name);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <div className={styles.statusBar}>
                <img src={statusBarImg} className={styles.statusBar} alt="status-bar" draggable={false} />
                <div className={`${styles.grid} ${styles.statusText}`}>
                    <div className={styles.skill}>{skill}</div>
                    <div className={styles.name}>{name}</div>
                </div>
            </div>
        </>
    )
};

export default StatusBar;