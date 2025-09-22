import styles from "./list.css";

import sampleImg from "../assets/sampleImage.jpg";

import Card from "./card";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Swiper as SwiperType } from "swiper/types";

type ListProps = {
    num: number;
};

const List = ({ num }: ListProps) => {

    const [isNum, setIsNum] = useState(0);

    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    useEffect(() => {
        setIsNum(num);
    }, [num]);

    useEffect(() => {
        if (swiper) {
            swiper.slideTo(isNum);
        }
    }, [isNum, swiper]);

    return (
        <><div className={styles.listBackStyle}>
            <Swiper spaceBetween={10} slidesPerView={1} className={styles.sliderStyle} onSwiper={setSwiper}>
                <SwiperSlide>
                    {/* <img src={listBackImg} alt="list back" draggable={false} /> */}
                    <div className={styles.listGridStyle}>
                        <Card title="株式会社A" date="2024/0X/XX~2024/XX/XX" img={sampleImg} />
                        <Card title="株式会社B" date="2025/0X/XX~2025/XX/XX" img={sampleImg} />
                        <Card title="株式会社C" date="2023/0X/XX~2023/XX/XX" img={sampleImg} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src={listBackImg} alt="list back" draggable={false} /> */}
                    <div className={styles.listGridStyle}>
                        <Card title="株式会社D" date="2024/0X/XX~2024/XX/XX" img={sampleImg} />
                        <Card title="株式会社E" date="2025/0X/XX~2025/XX/XX" img={sampleImg} />
                        <Card title="株式会社F" date="2023/0X/XX~2023/XX/XX" img={sampleImg} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src={listBackImg} alt="list back" draggable={false} /> */}
                    <div className={styles.listGridStyle}>
                        <Card title="株式会社G" date="2024/0X/XX~2024/XX/XX" img={sampleImg} />
                        <Card title="株式会社H" date="2025/0X/XX~2025/XX/XX" img={sampleImg} />
                        <Card title="株式会社I" date="2023/0X/XX~2023/XX/XX" img={sampleImg} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
        </>
    )
};

export default List;