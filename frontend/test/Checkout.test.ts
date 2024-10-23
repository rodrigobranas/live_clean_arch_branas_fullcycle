import Checkout from "../src/domain/Checkout";
import Product from "../src/domain/Product";

test("Deve testar o fluxo de checkout", function () {
	const checkout = new Checkout();
	const products = [
		new Product(1, "A", 100),
		new Product(2, "B", 200)
	];
	checkout.add(products[0]);
	checkout.add(products[0]);
	checkout.add(products[1]);
	expect(checkout.getTotal(products)).toBe(400);
	checkout.incrementItem(1);
	expect(checkout.getTotal(products)).toBe(500);
	checkout.incrementItem(2);
	expect(checkout.getTotal(products)).toBe(700);
	checkout.decrementItem(1);
	expect(checkout.getTotal(products)).toBe(600);
	expect(checkout.items).toHaveLength(2);
	expect(checkout.items[0].quantity).toBe(2);
	expect(checkout.items[1].quantity).toBe(2);
});
