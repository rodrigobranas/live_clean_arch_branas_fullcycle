import { mount } from "@vue/test-utils"
import App from "../src/App.vue"
import { ProductsGatewayFake, ProductsGatewayHttp } from "../src/infra/gateway/ProductsGateway";

function sleep (time: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, time);
	})
}

test("Deve testar o fluxo do checkout", async () => {
	const wrapper = mount(App, {
		global: {
			provide: {
				productsGateway: new ProductsGatewayFake()
			}
		}
	});
	await sleep(200);
	expect(wrapper.findAll(".label-product-description").at(0)?.text()).toBe("A");
	expect(wrapper.findAll(".label-product-price").at(0)?.text()).toBe("100");
	expect(wrapper.findAll(".label-product-description").at(1)?.text()).toBe("B");
	expect(wrapper.findAll(".label-product-price").at(1)?.text()).toBe("200");
	expect(wrapper.findAll(".label-product-description").at(2)?.text()).toBe("C");
	expect(wrapper.findAll(".label-product-price").at(2)?.text()).toBe("400");
	expect(wrapper.get(".label-total").text()).toBe("0");
	await wrapper.findAll(".button-add-product").at(0)?.trigger("click");
	await wrapper.findAll(".button-add-product").at(0)?.trigger("click");
	await wrapper.findAll(".button-add-product").at(0)?.trigger("click");
	expect(wrapper.get(".label-total").text()).toBe("300");
	expect(wrapper.findAll(".label-cart-item-description").at(0)?.text()).toBe("A");
	expect(wrapper.findAll(".label-cart-item-quantity").at(0)?.text()).toBe("3");
	await wrapper.findAll(".button-cart-item-decrement").at(0)?.trigger("click");
	await wrapper.findAll(".button-cart-item-decrement").at(0)?.trigger("click");
	expect(wrapper.findAll(".label-cart-item-quantity").at(0)?.text()).toBe("1");
	await wrapper.findAll(".button-cart-item-increment").at(0)?.trigger("click");
	expect(wrapper.findAll(".label-cart-item-quantity").at(0)?.text()).toBe("2");
});
