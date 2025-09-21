import { style } from "@vanilla-extract/css";

// 戻るボタン
export const backBtnStyle = style({
    position: "absolute",
    top: "2.5vh",
    left: "1.3vw",
});

// ステータスバー
export const statusBarStyle = style({
    position: "absolute",
    top: "2.5vh",
    right: "1.3vw",
});

// 進ボタン
export const nextBtnStyle = style({
    position: "absolute",
    bottom: "0vh",
    right: "1.3vw",
});

// 戻るボタン
export const preBtnStyle = style({
    position: "absolute",
    bottom: "0vh",
    left: "1.3vw",
});

// 背景画面
export const backScreen = style({
    position: "absolute",
    width: "100vw",
    height: "100vh",
});