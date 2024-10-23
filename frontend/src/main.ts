import { createApp } from 'vue';
import App from "./App.vue";
import './style.css';
import { ProductsGatewayHttp } from './infra/gateway/ProductsGateway';
import { AxiosAdapter, FetchAdapter } from './infra/http/HttpClient';

const app = createApp(App);
const httpClient = new FetchAdapter();
const productsGateway = new ProductsGatewayHttp(httpClient);
app.provide("productsGateway", productsGateway);
app.mount('#app');
