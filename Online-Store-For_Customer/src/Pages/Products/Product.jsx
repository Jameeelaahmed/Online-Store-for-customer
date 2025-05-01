import classes from './Products.module.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import img from '../../assets/hoddie.png'
import { productActions } from '../../Store/productSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function Product({ productDetails }) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleClick() {
        navigate(`/products/${productDetails.id}`);
    }

    const dispatch = useDispatch();
    // const cartProduct = useSelector(state => state.product.product)

    function addProductHandler(product) {
        dispatch(productActions.addProduct(product))
    }

    return (
        <div className={classes.product}>
            <div onClick={handleClick}>
                <div className={classes.center}>
                    <div className={classes.image}>
                        <img src={img} alt="" className={classes.product_img} />
                    </div>
                </div>
                <div className={classes.add_to_cart}>
                    <div className={classes.size_dropUP}>
                        <p className={classes.size_text}>{t("Size")}</p>
                        <div className={classes.dropUP}>
                            <p>XS</p>
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                            <p>XL</p>
                        </div>
                    </div>

                    <p className={classes.add} onClick={() => addProductHandler(productDetails)}>{t("Add to Cart")}</p>
                </div>
                <div className={classes.product_container}>
                    <h3 className={classes.title}>{productDetails.name}</h3>
                    <p className={classes.description}>{productDetails.description}</p>
                    <p className={classes.price}>{productDetails.price}</p>
                </div>
            </div>
        </div>
    );
}
