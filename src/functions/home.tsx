import ProductsBD from "./bd.json";

export const getDataHome = async () => {
    const { results } = ProductsBD;
    return results;
}