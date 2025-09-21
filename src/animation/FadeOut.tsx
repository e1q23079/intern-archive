import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeOutProps = {
    children: ReactNode;
};

// FadeOutコンポーネント
const FadeOut = ({ children }: FadeOutProps) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 3, delay: 1, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default FadeOut;