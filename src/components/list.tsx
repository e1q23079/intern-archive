import styles from "./list.css";

import sampleImg from "../assets/sampleImage.jpg";

import Card from "./card";

import { useEffect, useState } from "react";

type ListProps = {
    num: number;
};

const List = ({ num }: ListProps) => {

    const [isNum, setIsNum] = useState(0);

    useEffect(() => {
        setIsNum(num);
    }, [num]);

    if (isNum === 0) {
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
            </>)
    } else if (isNum === 1) {
        return (
            <>
                <div className={styles.listBackStyle}>
                    {/* <img src={listBackImg} alt="list back" draggable={false} /> */}
                    <div className={styles.listGridStyle}>
                        <Card title="株式会社D" date="2024/0X/XX~2024/XX/XX" img={sampleImg} />
                        <Card title="株式会社E" date="2025/0X/XX~2025/XX/XX" img={sampleImg} />
                        <Card title="株式会社F" date="2023/0X/XX~2023/XX/XX" img={sampleImg} />
                    </div>
                </div >
            </>
        )

    } else if (isNum === 2) {
        return (<>
            <div className={styles.listBackStyle}>
                {/* <img src={listBackImg} alt="list back" draggable={false} /> */}
                <div className={styles.listGridStyle}>
                    <Card title="株式会社G" date="2024/0X/XX~2024/XX/XX" img={sampleImg} />
                    <Card title="株式会社H" date="2025/0X/XX~2025/XX/XX" img={sampleImg} />
                    <Card title="株式会社I" date="2023/0X/XX~2023/XX/XX" img={sampleImg} />
                </div>
            </div >
        </>
        )
    }
};

export default List;