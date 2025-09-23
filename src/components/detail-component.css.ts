import { style, globalStyle } from "@vanilla-extract/css";

const detailImageStyle = style({
    width: "75%",
    margin: "0 auto",
    display: "block",
});

const detailSwipStyle = style({
    width: "75%",
});

globalStyle("h1", {
    padding: "0.125em 0.3em",
    borderBottom: "solid 5px #00206098",
    color: "#002060",
});

globalStyle("h2", {
    padding: "0.125em 0.5em",
    borderLeft: "solid 5px #00206098",
    color: "#002060",
});

globalStyle("h3,h4,h5,p", {
    color: "#002060",
});


const styles = { detailImageStyle, detailSwipStyle };

export default styles;