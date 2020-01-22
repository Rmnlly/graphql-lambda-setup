const { RESTDataSource } = require("apollo-datasource-rest");

class ProductAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "api endpoint";
  }

  async getProductById({ productId }) {
    if (!this.context.user || !productId) {
      const response = {
        selectedvariantCode: "variantx1",
        name: "Special face polish - Ultra",
        description:
          "A product for those who don't pass an ID or Authorization header"
      };

      return this.productReducer(response);
    }

    const response = await this.get(`?productCode=${productId}&qty=1`);

    return this.productReducer(response);
  }

  productReducer(product) {
    return {
      id: product.selectedvariantCode,
      name: product.name,
      image:
        product.productImages &&
        product.productImages.images &&
        product.productImages.images[0]["small"],
      description: product.description
    };
  }
}

module.exports = ProductAPI;
