import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
import Contact from "./components/Contact.vue";
import ViewProduct from "./components/ViewProduct.vue";
import PageNotFound from "./components/PageNotFound.vue";
import Product from "./components/Product.vue";
import ProductReviews from "./components/ProductReviews.vue";

export const routes = [
    { path: "", component: ProductList },
    { path: "/cart", component: Cart, alias: "/shopping-cart" },
    {
        path: "/product/:productId",
        props: true,
        name: "Product",
        component: Product,
        children:[
            {path: "details", name: "ViewProduct", props: true, component: ViewProduct},
            {path: "reviews", name: "ProductReviews", props: true, component: ProductReviews}
        ]
    },
    { path: "/contact", component: Contact },
    { path: "/*", component: PageNotFound }
];
