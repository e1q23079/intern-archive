import styles from "./list.css";

import sampleImg from "../assets/sampleImage.jpg";

import Tap from "../animation/Tap";

const List = () => {
    return (
        <>
            <div className={styles.listBackStyle}>
                {/* <img src={listBackImg} alt="list back" draggable={false} /> */}
                <div className={styles.listGridStyle}>
                    <Tap>
                        <div className={styles.listItemStyle}>
                            <div className={styles.twoColumnGridStyle}>
                                <img src={sampleImg} alt="icon" draggable={false} className={styles.img} />
                                <div className={styles.title}>株式会社A</div>
                                <div className={styles.date}>2025/0X/XX~2025/XX/XX</div>
                            </div>
                        </div>
                    </Tap>
                    <div className={styles.listItemStyle}>株式会社B</div>
                    <div className={styles.listItemStyle}>株式会社C</div>
                </div>
            </div >
        </>
    )
};

export default List;