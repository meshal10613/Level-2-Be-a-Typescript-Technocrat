// Utility type

type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">; // create a new type with this types

type ProductWithoutStock = Omit<Product, "stock" | "color"> // remove types

type ProductWithColor = Required<Product> // required all types

type ProductReadOnly = Readonly<Product> // readonly all products

const emptyObj: Record<string, unknown> = {
	id: 1,
	name: "Meshal"
}