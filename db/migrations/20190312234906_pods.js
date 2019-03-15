
exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable("pods", (table) => {
        table.increments("id").primary();
        table.string("sku");
        table.string("type");
        table.integer("count");
        table.string("metric");
        table.string("flavor");
      })
    ]);
  };

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable("pods")
      ]); 
};
