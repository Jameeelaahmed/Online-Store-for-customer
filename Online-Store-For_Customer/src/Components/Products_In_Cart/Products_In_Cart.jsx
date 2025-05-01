import classes from './Products_in_Cart.module.css'
import img from './hoddie.png'
import * as FaIcons from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../Store/productSlice';

export default function Products_In_Cart() {
    const { t } = useTranslation()
    const productsInCart = useSelector(state => state.product.items)
    const dispatch = useDispatch();

    function addProductHandler(product) {
        dispatch(productActions.addProduct(product))
    }

    function removeProductsHandler(product) {
        dispatch(productActions.deleteProduct(product))
    }

    function removeOneProduct(product) {
        dispatch(productActions.removeOneProduct(product))
    }

    return (
        <div className={classes.cart}>
            {productsInCart.map((product) => (
                <div key={product.id} className={classes.product}>
                    <div className={classes.container}>
                        <img src={img} alt="img" className={classes.img} />
                        <div className={classes.product_details}>
                            <div>
                                <p className={classes.description}>{product.name}</p>
                                <p className={classes.description}>{product.description}</p>
                            </div>
                            <p className={classes.price}>{product.price}</p>
                        </div>
                    </div>
                    <div className={classes.actions}>
                        <button className={classes.remove} onClick={() => removeProductsHandler(product)}>
                            <span>{t('Remove')}</span>
                            <FaIcons.FaTrash />
                        </button>
                        <div className={classes.quantity}>
                            <button onClick={() => removeOneProduct(product)}>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => addProductHandler(product)}>+</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}