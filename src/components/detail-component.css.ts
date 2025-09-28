import { style, globalStyle } from "@vanilla-extract/css";

const detailImageStyle = style({
    width: "75%",
    margin: "0 auto",
    display: "block",
});

const detailSwipStyle = style({
    width: "75%",
});

const detailURLStyle = style({
    wordBreak: "break-all",
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

globalStyle("h3,h4,h5", {
    color: "#002060",
    backgroundColor: "#00206020",
    padding: "0.1em 0.3em",
});

globalStyle("p", {
    color: "#002060",
    padding: "0.1em 0.3em",
})

globalStyle("li", {
    color: "#002060",
})

globalStyle("a", {
    padding: "0.1em 0.3em",
})

globalStyle("hr", {
    backgroundColor: "#00206098",
});


const styles = { detailImageStyle, detailSwipStyle, detailURLStyle };

export default styles;