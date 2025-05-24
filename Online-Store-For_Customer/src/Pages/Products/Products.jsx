import Product from './Product'
import classes from './Products.module.css'
import { useTranslation } from 'react-i18next';
export default function Products() {
    const { t } = useTranslation();

    const products = [
        {
            id: 1,
            name: "Puffer Jacket",
            description: "A lightweight, insulated jacket perfect for cold weather.",
            price: 129.99,
        },
        {
            id: 2,
            name: "Leather Jacket",
            description: "A classic black leather jacket with a sleek design.",
            price: 199.99,
        },
        {
            id: 3,
            name: "Fur Jacket",
            description: "A luxurious fur jacket for a warm and stylish look.",
            price: 249.99,
        },
        {
            id: 4,
            name: "Denim Jacket",
            description: "A timeless denim jacket with a comfortable fit.",
            price: 89.99,
        },
        {
            id: 5,
            name: "Bomber Jacket",
            description: "A trendy bomber jacket with ribbed cuffs and a zip front.",
            price: 99.99,
        },
        {
            id: 6,
            name: "Windbreaker Jacket",
            description: "A lightweight windbreaker jacket, ideal for outdoor activities.",
            price: 79.99,
        },
        {
            id: 7,
            name: "Rain Jacket",
            description: "A waterproof jacket with a hood for rainy days.",
            price: 59.99,
        },
        {
            id: 8,
            name: "Quilted Jacket",
            description: "A cozy quilted jacket with a modern design.",
            price: 149.99,
        },
        {
            id: 9,
            name: "Trench Coat",
            description: "An elegant trench coat with a belted waist.",
            price: 179.99,
        },
        {
            id: 10,
            name: "Parkas Jacket",
            description: "A heavy-duty parka with a fur-lined hood for extreme cold.",
            price: 229.99,
        },
        {
            id: 11,
            name: "Blazer Jacket",
            description: "A smart blazer-style jacket for formal occasions.",
            price: 139.99,
        },
        {
            id: 12,
            name: "Shearling Jacket",
            description: "A stylish shearling jacket with a cozy lining.",
            price: 189.99,
        },
    ];


    return (
        <>
            <div className={classes.specific_category}>
                <p>{t("All")}</p>
                <p>{t("Puffer")}</p>
                <p>{t("Leather")}</p>
                <p>{t("Waterproof")}</p>
            </div>
            <div className={classes.products}>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        productDetails={product}
                    />
                ))}
            </div>
        </>
    )
}