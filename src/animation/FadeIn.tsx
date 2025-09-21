import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
    children: ReactNode;
};

// FadeInコンポーネント
const FadeIn = ({ children }: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;