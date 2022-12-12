import { navbar } from './navbar/navbar';
import { products } from './products/products';

const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length === 0) {
            reject(new Error(`No se encontraron productos!`));
        } else {
            resolve(products);
        }
    });
}

export const getAllProducts = async (productId) => {
    try {
        const products = await getProducts();
        productId(products);
    }
    catch (error) {
        alert(`No se encontraron productos!`);
    }
}

export const getProductById = async (id, productId) => {
    try {
        const getById = (id, i) => i.find((p) => p.id === id);
        const result = await getProducts();
        productId(getById(id, result));
    }
    catch (error) {
        alert(`No se encontró el producto!`);
    }
}

const getNavbar = () => {
    return new Promise((resolve, reject) => {
        if (navbar.length === 0) {
            reject(new Error(`Error!`));
        } else {
            resolve(navbar);
        }
    });
}

export const getNavbarItems = async (item) => {
    try {
        const navbar = await getNavbar();
        item(navbar);
    }
    catch (error) {
        new Error(`Error!`);
    }
}