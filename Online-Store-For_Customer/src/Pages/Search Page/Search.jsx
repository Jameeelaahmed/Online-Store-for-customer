import classes from './Search.module.css'
import * as FaIcons from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import Products from '../Products/Products';
export default function Search() {
    const { t } = useTranslation();
    return (
        <div className={classes.search}>
            <div className={classes.search_input}>
                <FaIcons.FaMagnifyingGlass className={classes.search_icon} />
                <input type="search" placeholder={t("Search products")} />
            </div>
            <Products />
        </div>
    )
}