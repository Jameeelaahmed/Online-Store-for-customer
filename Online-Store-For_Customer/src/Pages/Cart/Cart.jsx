
import OrderSummery from '../../Components/OrderSummery/OrderSummery';
import Products_In_Cart from '../../Components/Products_In_Cart/Products_In_Cart';
import classes from './Cart.module.css'
// import * as FaIcons from 'react-icons/fa6';
import emptyImage from '../../assets/emptyImage.png'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import MainButton from '../../Components/MainButton/MainButton';
export default function Cart() {
    const productsInCart = useSelector(state => state.product.items)
    const { t } = useTranslation();
    return (
        <>
            {
                productsInCart.length === 0 ?
                    <div className={classes.emptyCartimage}>
                        <img src={emptyImage} alt="" />
                        <MainButton textContent={t("go to product page")}></MainButton>
                    </div> :
                    <div className={classes.cart_container}>
                        <Products_In_Cart />
                        <OrderSummery />
                    </div>
            }
        </>
    )
}
