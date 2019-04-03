<template>
    <div class="container-fluid">
        <div class="row">
          <div class="col">
        <b-button @click="goBack" >&laquo; Back</b-button>
        <h1>{{ product.name }}</h1>
        <hr>
        <img class="thumbnail" :src="product.image">
        <p><strong>ID:</strong> {{ product.id }}</p>
        <p><strong>Price:</strong> {{ product.price | currency }}</p>
        <p><strong>In stock:</strong> {{ product.inStock }}</p>
        <p>{{ product.description }}</p>
       </div>
       </div>
       <br><br>
        <div class="row">
          <div class=col>
        <div v-if="relatedProducts != null">
            <h2>Related Products</h2>
            <ul>
                <li v-for="(related,index) in relatedProducts" :key="index">
                    <router-link :to="{ name: 'ViewProduct', params: { productId: related.id } }">
                        {{ related.name }}
                    </router-link>
                </li>
            </ul>
        </div>
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
            product: null
        };
    },
    watch:{
        productId(newValue){
            this.product = this.getProduct(newValue);
        }
    },
    created() {
        this.product = this.getProduct(this.productId);
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
        goBack(){
            this.$router.go(-1);
        }
    },
    computed: {
        relatedProducts() {
            if (this.product === null) {
                return [];
            }
          
            let related = [];
            let count = 0;

            this.products.forEach((product)=>{
                if(product.id != this.product.id && count <5){
                    related.push(product);
                    count++;
                }
            });
            console.log(related);
            return related;
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