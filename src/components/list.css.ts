import { style } from "@vanilla-extract/css";

// リスト背景
const listBackStyle = style({
    position: "absolute",
    width: "90vw",
    height: "62vh",
    top: "50.5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#00206098",
    padding: "2vw",
    borderRadius: "10px",
    border: "1px solid #ffffffff",
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
    backgroundColor: "#ffffffff",
    height: "100%",
    cursor: "pointer",
});

// タイトル
const title = style({
    fontSize: "2.5vw",
    color: "#002060",
});

// 日付
const date = style({
    fontSize: "1.5vw",
    color: "#666666",
});

// ２分割グリッド
const twoColumnGridStyle = style({
    display: "grid",
    gridTemplateRows: "2fr 0.5fr 0.5fr",
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

// スライダー
const sliderStyle = style({
    width: "100%",
    height: "100%",
});

const styles = { listBackStyle, listGridStyle, listItemStyle, twoColumnGridStyle, img, title, date, sliderStyle };

export default styles;