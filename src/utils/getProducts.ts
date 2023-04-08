export default async function getProducts(): Promise<Array<Product>> {
  return fetch("http://localhost:3000/api/products", {
    method: "GET",
  }).then((res) => res.json());
}
