import axios from "axios";

test("Deve retornar a lista de produtos", async function () {
	const response = await axios("http://localhost:3000/products");
	const output = response.data;
	expect(output).toHaveLength(3);
	expect(output[0].description).toBe("A");
	expect(output[0].price).toBe(100);
	expect(output[1].description).toBe("B");
	expect(output[1].price).toBe(200);
	expect(output[2].description).toBe("C");
	expect(output[2].price).toBe(400);
});
