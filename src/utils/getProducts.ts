export default async function getProducts(): Promise<Array<Product>> {
  return fetch(process.env.API_URL + "/products", {
    method: "GET",
  }).then((res) => res.json());
}
