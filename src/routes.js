import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
import Contact from "./components/Contact.vue";
import ViewProduct from "./components/ViewProduct.vue";
import PageNotFound from "./components/PageNotFound.vue";

export const routes = [
    { path: "", component: ProductList },
    { path: "/cart", component: Cart },
    { path: "/product/:productId",props:true, name:"ViewProduct", component: ViewProduct},
    { path: "/contact", component: Contact },
    { path: "/*", component: PageNotFound},
];