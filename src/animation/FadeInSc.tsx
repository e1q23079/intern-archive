import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInScProps = {
    children: ReactNode;
};

// FadeInScコンポーネント
const FadeInSc = ({ children }: FadeInScProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeIn" }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSc;