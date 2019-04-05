<template>
    <div class="container-fluid">
        <div class="row">
          <div class="col">
        
        <img class="thumbnail" :src="product.image">
        <p><strong>ID:</strong> {{ product.id }}</p>
        <p><strong>Price:</strong> {{ product.price - discount | currency }}<span v-if="discount >0">(save {{discount | currency}})</span></p>
        <p><strong>In stock:</strong> {{ product.inStock }}</p>
        <p>{{ product.description }}</p>

        <button
        class="btn btn-success add-to-cart"
        @click="addProductToCart(product, 1)"
        :disabled="product.inStock <= 0"
            >Add to cart</button>
       </div>
       </div>

    </div>
</template>

<script>
import { products } from "../data/products";

export default {
    props: {
        productId:{
            required: true
        }
    },
    data() {
        return {
            products: products,
            product: null,
            discount: 0
        };
    },
    watch:{
        productId(newValue){
            this.product = this.getProduct(newValue);
            this.discount = this.getDiscount(this.product.price, this.$route.query.discount);
        }
    },
    created() {
        this.$watch("$route.query.discount",(newValue)=>{
            this.discount = this.getDiscount(this.product.price, newValue);
        });
        this.product = this.getProduct(this.productId);

        if(typeof this.$route.query.discount !== "undefined"){
            this.discount = this.getDiscount(this.product.price, this.$route.query.discount);
        }
    },
    methods: {
        getProduct(productId) {
            let match = null;

            this.products.forEach(function(product) {
                if (product.id == productId) {
                    match = product;
                }
            });

            return match;
        },        
        getCartItem(product){
            for(let i=0;i<this.cart.items.length;i++){
                if(this.cart.items[i].product.id ===product.id){
                    return this.cart.items[i];
                }
            }
        },
        addProductToCart(product, quantity) {
            let cartItem = this.getCartItem(product);

            // TODO: Verify that there is "quantity" of the product in stock before adding it.

            if (cartItem != null) {
                cartItem.quantity += quantity;
            } else {
                this.cart.items.push({
                    product: product,
                    quantity: quantity
                });
            }
            product.inStock -= quantity;
        },
        getDiscount(originalPrice, percentage){
            if (!percentage){
                return 0;
            }
            return((originalPrice*percentage)/100);
        }
    },
    
    computed:{
        cart(){
            return this.$store.state.cart;
        }
    }
};
</script>

<style>
.thumbnail{
  float:left;
  max-height: 400px;
  max-width: 400px;
  margin-right: 2rem;
}
</style>