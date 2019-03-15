
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pods").del()
    .then(function () {
      // Inserts seed entries
      return knex("pods").insert([
        {id: 1, sku: "CP001", type: "small", count: 1, metric: "dozen", flavor: "vanilla"},
        {id: 2, sku: "CP003", type: "small", count: 3, metric: "dozen", flavor: "vanilla"},
        {id: 3, sku: "CP011", type: "small", count: 1, metric: "dozen", flavor: "caramel"},
        {id: 4, sku: "CP013", type: "small", count: 3, metric: "dozen", flavor: "caramel"},
        {id: 5, sku: "CP021", type: "small", count: 1, metric: "dozen", flavor: "psl"},
        {id: 6, sku: "CP023", type: "small", count: 3, metric: "dozen", flavor: "psl"},
        {id: 7, sku: "CP031", type: "small", count: 1, metric: "dozen", flavor: "mocha"},
        {id: 8, sku: "CP033", type: "small", count: 3, metric: "dozen", flavor: "mocha"},
        {id: 9, sku: "CP041", type: "small", count: 1, metric: "dozen", flavor: "hazelnut"},
        {id: 10, sku: "CP043", type: "small", count: 3, metric: "dozen", flavor: "hazelnut"},
        {id: 11, sku: "CP101", type: "large", count: 1, metric: "dozen", flavor: "vanilla"},
        {id: 12, sku: "CP103", type: "large", count: 3, metric: "dozen", flavor: "vanilla"},
        {id: 13, sku: "CP111", type: "large", count: 1, metric: "dozen", flavor: "caramel"},
        {id: 14, sku: "CP113", type: "large", count: 3, metric: "dozen", flavor: "caramel"},
        {id: 15, sku: "CP121", type: "large", count: 1, metric: "dozen", flavor: "psl"},
        {id: 16, sku: "CP123", type: "large", count: 3, metric: "dozen", flavor: "psl"},
        {id: 17, sku: "CP131", type: "large", count: 1, metric: "dozen", flavor: "mocha"},
        {id: 18, sku: "CP133", type: "large", count: 3, metric: "dozen", flavor: "mocha"},
        {id: 19, sku: "CP141", type: "large", count: 1, metric: "dozen", flavor: "hazelnut"},
        {id: 20, sku: "CP143", type: "large", count: 3, metric: "dozen", flavor: "hazelnut"},
        {id: 21, sku: "EP003", type: "espresso", count: 3, metric: "dozen", flavor: "vanilla"},
        {id: 22, sku: "EP005", type: "espresso", count: 5, metric: "dozen", flavor: "vanilla"},
        {id: 23, sku: "EP007", type: "espresso", count: 7, metric: "dozen", flavor: "vanilla"},
        {id: 24, sku: "EP013", type: "espresso", count: 3, metric: "dozen", flavor: "caramel"},
        {id: 25, sku: "EP015", type: "espresso", count: 5, metric: "dozen", flavor: "caramel"},
        {id: 26, sku: "EP017", type: "espresso", count: 7, metric: "dozen", flavor: "caramel"}
      ]);
    });
};
