<template>
    <div class="container-fluid">
        <div class="row">
          <div class="col">


         <b-nav vertical class="w-25">
            <b-nav-item class="presentation" :to="{name: 'ViewProduct', params:{productId: product.id}}"><a>Details</a></b-nav-item>
             <b-nav-item class="presentation" :to="{name: 'ProductReviews', params:{productId: product.id}}"><a>Reviews</a></b-nav-item>
            
        </b-nav>

        <routed-view></routed-view>
        <hr>
       </div>
       </div>
       <br><br>
        <div class="row">
          <div class=col>

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