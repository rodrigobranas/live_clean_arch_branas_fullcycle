import axios from "axios";

export default interface HttpClient {
	get (url: string): Promise<any>;
}

export class FetchAdapter implements HttpClient {

	async get(url: string): Promise<any> {
		const response = await fetch(url);
		return response.json();
	}

}

export class AxiosAdapter implements HttpClient {

	async get(url: string): Promise<any> {
		const response = await axios.get(url);
		return response.data;
	}

}
