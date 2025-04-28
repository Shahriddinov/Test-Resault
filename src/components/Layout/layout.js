import React, {useState, useEffect} from "react";
import Header from "./Header/header";
import {Outlet} from "react-router";
import Footer from "./Footer/footer";
import {useLocation} from "react-router";
import {LuPhoneCall} from "react-icons/lu";
import { motion } from "framer-motion";

const Layout = (props) => {
    const {children} = props;
    const {pathname} = useLocation();
    const [text, setText] = useState("");
    const [speaker, setSpeaker] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);

    const changeSpeakSwitcher = (value) => {
        setSpeaker(value);
    };



    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const isNotFoundRoute = pathname === "/"; // `/404` yo‘lini `NotFound` uchun ishlating.

    useEffect(() => {
        document.onmouseup = () => {
            if (speaker && text !== window.getSelection().toString()) {
                window.responsiveVoice.speak(
                    window.getSelection().toString(),
                    "Russian Female"
                );
                setText(window.getSelection().toString());
            }
        };
    }, [speaker]);


    return (
        <>
            <div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
                {/*{!isNotFoundRoute && (*/}


                {/*    <Header speaker={speaker} changeSpeakSwitcher={changeSpeakSwitcher}/>*/}
                {/*)}*/}
                <div className="page-content">{children}</div>
                {showTopBtn && (
                    <motion.a
                        className="scrollToHome"
                        href="tel:+48509931555"
                        initial={{ scale: 1 }}
                        animate={{
                            scale: [1, 1.1, 1], // Tugma kattalashib-kichrayadi
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >

                        <motion.div
                            animate={{ scale: [1, 1.3, 1] }} // **📌 Ikonka zoom-in va zoom-out**
                            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                        >
                            <LuPhoneCall color="white" />
                        </motion.div>
                    </motion.a>
                )}
                {/*{!isNotFoundRoute && (*/}
                {/*    <Footer/>*/}
                {/*)}*/}
            </div>
        </>
    );
};

export default Layout;
