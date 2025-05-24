import classes from './OrderSummery.module.css'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import MainButton from '../MainButton/MainButton';
export default function OrderSummery() {
    const { t } = useTranslation();
    const productsInCart = useSelector(state => state.product);

    return (
        <div className={classes.orderSummery}>
            <p className={classes.heading}>{t("Order Summery")}</p>
            <div className={classes.input_container}>
                <label htmlFor="copoun">{t("Copoun")}</label>
                <input type="text" />
                <button>{t("Apply")}</button>
            </div>
            <div className={classes.more_details}>
                <div className={classes.sub_detail}>
                    <span>{t('Subtotal')} <span>(num items)</span> </span>
                    <span>price</span>
                </div>
                <div className={classes.sub_detail}>
                    <span>{t('Shipping Fee')}</span>
                    <span>price</span>
                </div>
            </div>
            <div className={classes.sub_detail}>
                <span>{t('Total')}</span>
                <span>{productsInCart.totalPrice} $</span>
            </div>
            <div className={classes.button_container}>
                <MainButton textContent={t("Checkout")} width="100%"></MainButton>
            </div>
        </div>
    )
}