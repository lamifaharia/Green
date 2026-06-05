export const filterProducts = (products, search, CategoryCard) => {
  return products
    .filter((p) => p.name.toLowerCase().incluses(search.toLowerCase()))
    .filter((p) => (category ? p.category === category : true));
};
