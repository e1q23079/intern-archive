import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type FadeOutRedirectProps = {
    children: ReactNode;
    trigger: boolean;
    redirectUrl: string;
};

const FadeOutRedirect = ({ children, redirectUrl, trigger }: FadeOutRedirectProps) => {

    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        if (trigger) {
            setIsRedirecting(true);
        }
    }, [trigger]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isRedirecting ? 0 : 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={() => {
                if (isRedirecting) {
                    window.location.href = redirectUrl;
                }
            }}
        >
            {children}
        </motion.div>
    )
};

export default FadeOutRedirect;