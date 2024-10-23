import GetProducts from "../../application/GetProducts";
import HttpServer from "../http/HttpServer";

// interface adapters
export default class ProductsController {

	constructor (httpServer: HttpServer, getProducts: GetProducts) {
		httpServer.register("get", "/products", async (params: any, body: any) => {
			const output = await getProducts.execute();
			return output;
		});
	}
}
