import { style } from "@vanilla-extract/css";

// リスト背景
const listBackStyle = style({
    position: "absolute",
    width: "90vw",
    height: "72vh",
    top: "15vh",
    left: "5vw",
    backgroundColor: "#002060d5",
    padding: "2vw",
    borderRadius: "10px",
});

// グリッド
const listGridStyle = style({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    textAlign: "center",
    height: "100%",
    gap: "2vw",
});

const listItemStyle = style({
    backgroundColor: "#6e78deff",
});

const title = style({
    fontSize: "2.5vw",
});

// ２分割グリッド
const twoColumnGridStyle = style({
    display: "grid",
    gridTemplateRows: "2fr 0.5fr",
    height: "100%",
    alignItems: "center",
    justifyItems: "center",
});

const img = style({
    position: "relative",
    width: "90%",
    height: "90%",
    objectFit: "cover",
    borderRadius: "10px",
});

const styles = { listBackStyle, listGridStyle, listItemStyle, twoColumnGridStyle, img, title };

export default styles;