import styles from "./list.css";

import sampleImg from "../assets/sampleImage.jpg";

const List = () => {
    return (
        <>
            <div className={styles.listBackStyle}>
                {/* <img src={listBackImg} alt="list back" draggable={false} /> */}
                <div className={styles.listGridStyle}>
                    <div className={styles.listItemStyle}>
                        <div className={styles.twoColumnGridStyle}>
                            <img src={sampleImg} alt="icon" draggable={false} className={styles.img} />
                            <div className={styles.title}>株式会社A</div>
                        </div>
                    </div>
                    <div className={styles.listItemStyle}>株式会社B</div>
                    <div className={styles.listItemStyle}>株式会社C</div>
                </div>
            </div >
        </>
    )
};

export default List;