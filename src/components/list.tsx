import styles from "./list.css";

import sampleImg from "../assets/sampleImage.jpg";

import Card from "./card";

const List = () => {
    return (
        <>
            <div className={styles.listBackStyle}>
                {/* <img src={listBackImg} alt="list back" draggable={false} /> */}
                <div className={styles.listGridStyle}>
                    <Card title="株式会社A" date="2024/0X/XX~2024/XX/XX" img={sampleImg} />
                    <Card title="株式会社B" date="2025/0X/XX~2025/XX/XX" img={sampleImg} />
                    <Card title="株式会社C" date="2023/0X/XX~2023/XX/XX" img={sampleImg} />
                </div>
            </div >
        </>
    )
};

export default List;