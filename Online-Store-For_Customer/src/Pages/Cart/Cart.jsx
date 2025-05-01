
import OrderSummery from '../../Components/OrderSummery/OrderSummery';
import Products_In_Cart from '../../Components/Products_In_Cart/Products_In_Cart';
import classes from './Cart.module.css'
// import * as FaIcons from 'react-icons/fa6';
export default function Cart() {
    return (
        <div className={classes.cart_container}>
            <Products_In_Cart />
            <OrderSummery />
        </div>
    )
}
