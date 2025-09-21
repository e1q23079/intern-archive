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
                // display: "inline-block",
                transformOrigin: "center",
            }}
        >
            {children}
        </motion.div >
    );
};

export default Tap;