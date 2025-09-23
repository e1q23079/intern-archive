import { useParams } from "react-router-dom";

import DetailComponent from "./detail-component";

import { useEffect, useState } from "react";

import DetailData from "../components/detail-data";

import previewStyle from "./preview.css.ts";

const Preview = () => {

    const { id } = useParams<{ id: string }>();

    const [data, setData] = useState<DetailData>();

    useEffect(() => {
        fetch(`/intern-archive/data/${id}.json`)
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    return (
        <>
            <div className={previewStyle}>
                <DetailComponent detailData={data}></DetailComponent>
            </div>
        </>
    );
}

export default Preview;