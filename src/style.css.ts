import { style } from "@vanilla-extract/css";

// ポインター
const mousePointer = style({
    position: "absolute",

    left: "var(--mouse-x)",
    top: "var(--mouse-y)",

    transform: "translate(-50%, -50%)",

    border: "2px solid red",

    width: "30px",
    height: "30px",

});


// 画面
const screen = style({
    width: "100vw",
    height: "100vh",
});

export const styles = { mousePointer, screen };