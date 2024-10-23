import DatabaseConnection from "../database/DatabaseConnection";

// Pertence a camada de use cases
export default interface ProductDAO {
	list (): Promise<Product[]>;
}

// Interface Adapters
export class ProductDAODatabase implements ProductDAO {

	constructor (readonly connection: DatabaseConnection) {
	}

	async list(): Promise<Product[]> {
		return this.connection.query("select * from branas.product", []);
	}

}

export type Product = {
	product_id: number,
	description: string,
	price: string
}
