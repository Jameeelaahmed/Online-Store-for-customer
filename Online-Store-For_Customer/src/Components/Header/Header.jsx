import { useState, useEffect } from 'react';
import classes from './Header.module.css';
import * as FaIcons from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Header() {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [langDropdown, setLangDropdown] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const location = useLocation();
    const path = location.pathname;
    const handleLanguageChange = (lang) => {
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        i18n.changeLanguage(lang).then(() => {
            setCurrentLang(lang);
        }).catch((err) => console.error("Error changing language:", err));
    };

    function handleDropDown() {
        setLangDropdown(!langDropdown);
    }
    const handleScroll = () => {
        // Check if the scroll position is greater than 50px
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${classes.header} ${path === '/' ? classes.back_color : ""}`}>
            <div className={classes.fixed}>
                <div className={classes.dropdown_container} onClick={handleDropDown}>
                    <p>lang</p>
                    {langDropdown && (
                        <div className={classes.lang_dropdown}>
                            <p
                                onClick={() => handleLanguageChange("en")}
                                className={currentLang === "en" ? classes.active : ""}
                            >
                                English
                            </p>
                            <p
                                onClick={() => handleLanguageChange("ar")}
                                className={currentLang === "ar" ? classes.active : ""}
                            >
                                العربيه
                            </p>
                            <p
                                onClick={() => handleLanguageChange("ger")}
                                className={currentLang === "es" ? classes.active : ""}
                            >
                                Deutsch
                            </p>
                            <p
                                onClick={() => handleLanguageChange("fr")}
                                className={currentLang === "fr" ? classes.active : ""}
                            >
                                Français
                            </p>
                        </div>
                    )}

                </div>
                <p>Logo</p>
                <p>{t("Contact")}</p>
            </div>
            {isScrolled && <div className={classes.placeholder}></div>}
            <div className={`${classes.head_one} ${isScrolled ? classes.scrolled_one : ''}`}>
                <div className={classes.search}>
                    <div className={classes.search_container}>
                        <FaIcons.FaMagnifyingGlass className={classes.search_icon} />
                        {/* <input type="search" /> */}
                    </div>
                    <div className={classes.profile}>
                        <FaIcons.FaUser />
                    </div>
                </div>
                <ul className={classes.list}>
                    <NavLink to="/">
                        <li>
                            {t("Home")}
                        </li>
                    </NavLink>
                    <NavLink to="/products">
                        <li>
                            {t("Products")}
                        </li>
                    </NavLink>
                    <NavLink to="/services">
                        <li>
                            {t("Services")}
                        </li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>
                            {t("About Us")}
                        </li>
                    </NavLink>
                </ul>
                <div className={classes.cart}>
                    {t("Cart")}
                </div>
            </div>
            {/* <div className={`${classes.head_two} ${isScrolled ? classes.scrolled_two : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div> */}
        </div>
    );
}
