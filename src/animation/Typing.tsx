import { useEffect, useRef, useState } from "react";

type TypingProps = {
    text: string;
};

const Typing = ({ text }: TypingProps) => {

    const index = useRef(0);

    const [showText, setShowText] = useState("");

    useEffect(() => {

        const interval = setInterval(() => {
            if (text[index.current] === undefined) {
                clearInterval(interval);
            } else {
                setShowText(showText + text[index.current++]);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [showText, text, index]);

    return <div>{showText}</div>;
};

export default Typing;