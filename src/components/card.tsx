import styles from "./list.css";

import Tap from "../animation/Tap";

type cardProps = {
    title: string;
    date: string;
    img: string
};

const Card = ({ title, date, img }: cardProps) => {
    return (
        <Tap>
            <div className={styles.listItemStyle}>
                <div className={styles.twoColumnGridStyle}>
                    <img src={img} alt="icon" draggable={false} className={styles.img} />
                    <div className={styles.title}>{title}</div>
                    <div className={styles.date}>{date}</div>
                </div>
            </div>
        </Tap>
    );
};

export default Card;