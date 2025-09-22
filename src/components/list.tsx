import styles from "./list.css";

import data from "../data/data.json";

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
            <Swiper spaceBetween={10} slidesPerView={1} className={styles.sliderStyle} onSwiper={setSwiper} allowTouchMove={false}>
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.listGridStyle}>
                            {item.cards.map((card) => (
                                <Card title={card.company} date={card.date} img={card.img} />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
        </>
    )
};

export default List;