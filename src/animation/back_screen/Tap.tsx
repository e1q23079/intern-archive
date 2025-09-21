import { motion } from "framer-motion";
import { ReactNode } from "react";

type TapProps = {
    children: ReactNode;
};

// Tapコンポーネント
const Tap = ({ children }: TapProps) => {
    return (
        <motion.div
            whileTap={{ scale: 0.9 }}
            style={{
                display: "inline-block",
                transformOrigin: "center",
                width: "100%",
                height: "100%",
            }}
        >
            {children}
        </motion.div >
    );
};

export default Tap;