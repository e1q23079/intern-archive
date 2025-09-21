import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInOutOneProps = {
    children: ReactNode;
};

// FadeInOutOneコンポーネント
const FadeInOutOne = ({ children }: FadeInOutOneProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.5, delay: 4, ease: "easeInOut", repeat: Infinity }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOutOne;