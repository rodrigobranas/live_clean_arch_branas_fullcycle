
import GetProducts from "./application/GetProducts";
import ProductsController from "./infra/controller/ProductsController";
import { ProductDAODatabase } from "./infra/dao/ProductDAO";
import { PgPromiseAdapter } from "./infra/database/DatabaseConnection";
import { ExpressAdapter } from "./infra/http/HttpServer";

// entrypoint
async function main () {
	const httpServer = new ExpressAdapter();
	const databaseConnection = new PgPromiseAdapter();
	const productDAO = new ProductDAODatabase(databaseConnection);
	const getProducts = new GetProducts(productDAO);
	new ProductsController(httpServer, getProducts);
	httpServer.listen(3000);
}

main();
