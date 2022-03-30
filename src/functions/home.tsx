import ProductsBD from "./bd.json";

// function with return list of products
export const getDataHome = async () => {
    const { results } = ProductsBD;
    return results;
}