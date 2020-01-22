module.exports = {
  Query: {
    name: (_, __, ___) => "Raman Lally",
    // product: async (_, { id }, { dataSources }) =>
    //   dataSources.ProductAPI.getProductById({ productId: id })
    skills: (_, __, { dataSources }) => dataSources.SkillsAPI.getSkills()
  }
};
