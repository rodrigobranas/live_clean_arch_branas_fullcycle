import Item from "./Item";
import Product from "./Product";

export default class Checkout {
	items: Item[] = [];

	add (product: Product) {
		const item = this.items.find((item: Item) => item.productId === product.productId);
		if (item) {
			item.quantity++;
		} else {
			this.items.push({ productId: product.productId, description: product.description, quantity: 1 });
		}
	}

	incrementItem (productId: number) {
		const item = this.items.find((item) => item.productId === productId);
		if (item) {
			item.quantity++;
		}
	}

	decrementItem (productId: number) {
		const item = this.items.find((item: Item) => item.productId === productId);
		if (!item) throw new Error();
		if (item && item.quantity > 1) {
			item.quantity--;
		} else {
			this.items.splice(this.items.indexOf(item), 1);
		}
	}

	getTotal (products: Product[]) {
		let total = 0;
		for (const item of this.items) {
			const product = products.find((product: Product) => product.productId === item.productId);
			if (!product) throw new Error();
			total += product.price * item.quantity;
		}
		return total;
	}
}
