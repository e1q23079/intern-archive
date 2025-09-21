import { style } from "@vanilla-extract/css";

// ポインター
const mousePointer = style({
    position: "absolute",
    borderRadius: "50%",
    width: "20px",
    height: "20px",

    left: "var(--mouse-x)",
    top: "var(--mouse-y)",

    transform: "translate(-50%, -50%)",

    backgroundColor: "rgba(255, 0, 0, 0.5)",
});

// 画面
const screen = style({
    width: "100vw",
    height: "100vh",
});

export const styles = { mousePointer, screen };