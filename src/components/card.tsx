import styles from "./list.css";

import Tap from "../animation/Tap";

type cardProps = {
    title: string;
    date: string;
    img: string;
    onClickC?: () => void;
};

const Card = ({ title, date, img, onClickC }: cardProps) => {
    return (
        <Tap>
            <div className={styles.listItemStyle} onClick={onClickC}>
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