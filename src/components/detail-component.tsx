import DetailData from "./detail-data";
import styles from "./detail-component.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

type DetailComponentProps = {
    detailData?: DetailData;
};

const DetailComponent = ({ detailData }: DetailComponentProps) => {
    if (detailData) {
        return (
            <>
                <h1>◆ {detailData.company}</h1>
                <h2>{detailData.title}</h2>
                <h3>概要</h3>
                <p>{detailData.description}</p>
                <p><a href={detailData.url} target="_blank">{detailData.url}</a></p>
                <h4>開催日</h4>
                <p>{detailData.date}</p>
                <h4>開催場所</h4>
                <p>{detailData.location}</p>
                <hr />
                <h3>制作物</h3>
                <p>{detailData.explanation}</p>
                {detailData.image && (
                    <>
                        <Swiper pagination={{ type: 'fraction' }} navigation={true} modules={[Pagination, Navigation]} spaceBetween={50} slidesPerView={1} className={styles.detailSwipStyle}>
                            {detailData.image.map((imgSrc) => (
                                <SwiperSlide>
                                    <img src={`/intern-archive/${imgSrc}`} alt="Detail Image" className={styles.detailImageStyle} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                )}
                {detailData.list && (
                    <>
                        <h4>担当箇所・役割</h4>
                        <ul>
                            {detailData.list.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </>
                )}
                {detailData.ingenuity && (
                    <>
                        <h4>工夫したところ</h4>
                        <ul>
                            {detailData.ingenuity.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </>
                )}
                {detailData.hard && (
                    <>
                        <h4>苦労したこと</h4>
                        <ul>
                            {detailData.hard.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </>
                )}
                {detailData.learned && (
                    <>
                        <h4>学んだこと</h4>
                        <ul>
                            {detailData.learned.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </>
                )}
                {detailData.github && (
                    <>
                        <h4>GitHubリポジトリ</h4>
                        <p><a href={detailData.github} target="_blank">{detailData.github}</a></p>
                    </>
                )}
                <h4>リンク</h4>
                <ul>
                    {detailData.links && (
                        <>

                            {detailData.links.map((link) => (
                                <li key={link.url}><a href={link.url} target="_blank">{link.name}</a></li>
                            ))}

                        </>
                    )}
                    <li><a href={`/intern-archive/#preview/${detailData.id}`} target="_blank">インターンシップ参加ログ</a></li>
                </ul>
                {detailData.other && (
                    <>
                        <h4>その他</h4>
                        <p>{detailData.other}</p>
                    </>
                )}
            </>
        )
    } else {
        return <div>NO DATA</div>;
    }
};

export default DetailComponent;