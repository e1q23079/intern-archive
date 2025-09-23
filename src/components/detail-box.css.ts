import { style } from "@vanilla-extract/css";

// リスト背景
const listBackStyle = style({
    position: "absolute",
    width: "90vw",
    height: "72vh",
    top: "56%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#00206098",
    padding: "2vw",
    borderRadius: "10px",
    border: "1px solid #ffffffff",
    fontSize: "1.7vw",
});

// 文章エリア
const textAreaStyle = style({
    height: "100%",
    backgroundColor: "#ffffffff",
    overflowY: "scroll",
    overflowX: "hidden",
    paddingLeft: "1vw",
    paddingRight: "1vw",
    boxSizing: "border-box",
});

const styles = {
    listBackStyle,
    textAreaStyle,
};

export default styles;