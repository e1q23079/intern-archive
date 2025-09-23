import styles from "./detail-box.css";
import { ReactNode } from "react";

type DetailBoxProps = {
    children: ReactNode;
};

const DetailBox = ({ children }: DetailBoxProps) => {
    return (
        <div className={styles.listBackStyle}>
            <div className={styles.textAreaStyle}>
                {children}
            </div>
        </div>
    )
};

export default DetailBox;