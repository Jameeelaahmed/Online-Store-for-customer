import classes from './Products.module.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import img from '../../assets/hoddie.png'
import { productActions } from '../../Store/productSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Product({ productDetails }) {

    const navigate = useNavigate();
    const { t } = useTranslation();
    const [selectedSize, setSelectedSize] = useState("");
    const [showSizes, setShowSizes] = useState(false);
    const [sizeWarning, setSizeWarning] = useState(false)
    function handleClick() {
        navigate(`/products/${productDetails.id}`);
    }
    const dispatch = useDispatch();

    function addProductHandler(product) {
        if (selectedSize) {
            setSizeWarning(false)
            dispatch(productActions.addProduct({ ...product, size: selectedSize }))
        }
        else {
            setSizeWarning(true);
        }
    }

    return (
        <div className={classes.product}>
            {sizeWarning &&
                <div className={classes.warning}>
                    <p>you should select size</p>
                </div>}
            <div onClick={handleClick}>
                <div className={classes.center}>
                    <div className={classes.image}>
                        <img src={img} alt="" className={classes.product_img} />
                    </div>
                </div>
                <div className={classes.add_to_cart}>
                    <div className={classes.size_dropUP} onClick={() => setShowSizes(!showSizes)}>
                        <p className={classes.size_text}>{selectedSize || t("Size")}</p>
                        {/* <div className={classes.size_dropUP}> */}
                        <div className={`${classes.dropUP} ${showSizes ? classes.open : ""}`} >
                            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                <p key={size} onClick={() => { setSelectedSize(size); setShowSizes(false) }}>{size}</p>
                            ))}
                        </div>
                        {/* </div> */}
                    </div>
                    <p className={`${classes.add} ${sizeWarning && classes.red} `} onClick={() => addProductHandler(productDetails)}>{t("Add to Cart")}</p>
                </div>
                <div className={classes.product_container}>
                    <h3 className={classes.title}>{productDetails.name}</h3>
                    <p className={classes.description}>{productDetails.description}</p>
                    <p className={classes.price}>{productDetails.price}</p>
                </div>
            </div>
        </div >
    );
}

Product.propTypes = {
    productDetails: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }).isRequired
};