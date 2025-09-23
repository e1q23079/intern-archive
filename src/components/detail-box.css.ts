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

const styles = {
    listBackStyle,
};

export default styles;