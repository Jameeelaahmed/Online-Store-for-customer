import classes from './Products_in_Cart.module.css'
import img from './hoddie.png'
import * as FaIcons from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../Store/productSlice';
import emptyImage from '../../assets/emptyImage.png'
import { useState } from 'react';
export default function Products_In_Cart() {
    const { t } = useTranslation()
    const productsInCart = useSelector(state => state.product.items)
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState("");
    const [activeEditProductSize, setActiveEditProductSize] = useState(null);

    function addProductHandler(product) {
        dispatch(productActions.addProduct({ ...product, size: selectedSize }))
    }

    function removeProductsHandler(product) {
        dispatch(productActions.deleteProduct(product))
    }

    function removeOneProduct(product) {
        dispatch(productActions.removeOneProduct(product))
    }

    return (
        <div className={classes.cart}>
            {productsInCart.length === 0 ?
                <><div><img src={emptyImage} alt="" /></div></> : productsInCart.map((product) => (
                    <div key={product.id} className={classes.product}>
                        <div className={classes.container}>
                            <img src={img} alt="img" className={classes.img} />
                            <div className={classes.product_details}>
                                <div className={classes.product_description}>
                                    <p className={classes.description}>{product.name}</p>
                                    <p className={classes.description}>{product.description}</p>
                                    <div className={`${classes.description} ${classes.edit_size}`} onClick={() =>
                                        setActiveEditProductSize(activeEditProductSize === product.size ? null : product.size)
                                    }>
                                        <div className={classes.selected_Size}>
                                            <p>{product.size}</p>
                                            <FaIcons.FaCaretDown />
                                        </div>
                                        <div className={`${classes.editSize_container} ${activeEditProductSize === product.size ? classes.open : ''}`}>
                                            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                                <p key={size} onClick={() => { setSelectedSize(size); }}>{size}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className={classes.price}>{product.totalSameItemPrice} $</p>
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