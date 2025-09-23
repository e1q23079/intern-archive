import DetailData from "./detail-data";

type DetailComponentProps = {
    detailData?: DetailData;
};

const DetailComponent = ({ detailData }: DetailComponentProps) => {
    if (detailData) {
        return (
            <>
                <h1>{detailData.title}</h1>
                <p>{detailData.date}</p>
            </>
        )
    } else {
        return <div>NO DATA</div>;
    }
};

export default DetailComponent;