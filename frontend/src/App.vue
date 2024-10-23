<script setup lang="ts">
	import { ref, inject } from "vue";
	import ProductsGateway from "./infra/gateway/ProductsGateway";
	import Checkout from "./domain/Checkout";
	import Product from "./domain/Product";
	
	const checkout = ref(new Checkout());
	const products = ref([] as Product[]);
	
	const productsGateway = inject("productsGateway") as ProductsGateway;

	async function loadProducts () {
		const output = await productsGateway.getProducts();
		products.value.push(...output);
	}

	loadProducts();
</script>

<template>
	<div>
		<div class="label-total">{{ checkout.getTotal(products) }}</div>
		<div v-for="item in checkout.items">
			<div class="label-cart-item-description">{{ item.description }}</div>
			<div class="label-cart-item-quantity">{{ item.quantity }}</div>
			<button class="button-cart-item-increment" @click="checkout.incrementItem(item.productId)">+</button>
			<button class="button-cart-item-decrement" @click="checkout.decrementItem(item.productId)">-</button>
		</div>
		<hr/>
		<div v-for="product in products">
			<div class="label-product-description">{{ product.description }}</div>
			<div class="label-product-price">{{ product.price }}</div>
			<button class="button-add-product" @click="checkout.add(product)">Add</button>
		</div>
	</div>
</template>

<style>
</style>
