import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from 'providers/cart/CartProvider';
import Navbar from 'components/shared/navbar/Navbar';
import Home from 'screens/home/Home';
import Product from 'screens/product/Product';
import Cart from 'screens/cart/Cart';
import NotFound from 'screens/notFound/NotFound';
import Footer from 'components/shared/footer/Footer';

const Router = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/category/:sortBy`} element={<Home />} />
                    <Route path={`/product/:id`} element={<Product />} />
                    <Route path={`/cart`} element={<Cart />} />
                    <Route path={`/*`} element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
}

export default Router;