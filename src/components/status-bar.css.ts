import { style } from "@vanilla-extract/css";

const statusBar = style({
    position: "relative",
    width: "45vw",
});

const statusText = style({
    fontWeight: "bold",
});

const skill = style({
    color: "white",
});

const grid = style({
    position: "absolute",
    fontSize: "2.5vw",
    top: "0",
    left: "0",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
    height: "100%",
});

const styles = { statusBar, grid, skill, statusText };

export default styles;