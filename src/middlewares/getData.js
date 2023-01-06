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
        const getById = (id, item) => item.find((item) => item.id === id);
        const result = await getProducts();
        productId(getById(id, result));
    }
    catch (error) {
        alert(`No se encontró el producto!`);
    }
}