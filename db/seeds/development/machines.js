
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("machines").del()
    .then(function () {
      // Inserts seed entries
      return knex("machines").insert([
        {id: 1, sku: "CM002", type: "small", model: "premium", waterline: false},
        {id: 2, sku: "CM003", type: "small", model: "deluxe", waterline: true},
        {id: 3, sku: "CM101", type: "large", model: "base", waterline: false},
        {id: 4,sku: "CM102", type: "large", model: "premium", waterline: false},
        {id: 5,sku: "CM103", type: "large", model: "deluxe", waterline: true},
        {id: 6,sku: "EM001", type: "espresso", model: "base", waterline: false},
        {id: 7,sku: "EM002", type: "espresso", model: "premium", waterline: false},
        {id: 8,sku: "EM003", type: "espresso", model: "deluxe", waterline: true}
      ]);
    });
};
