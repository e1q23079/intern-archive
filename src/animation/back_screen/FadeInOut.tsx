import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInOutProps = {
    children: ReactNode;
};

// FadeInOutコンポーネント
const FadeInOut = ({ children }: FadeInOutProps) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, delay: 1, ease: "easeOut", repeat: Infinity }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOut;