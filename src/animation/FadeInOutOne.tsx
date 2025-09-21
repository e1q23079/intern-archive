import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInOutProps = {
    children: ReactNode;
};

// FadeInOutコンポーネント
const FadeInOut = ({ children }: FadeInOutProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.5, delay: 4, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOut;