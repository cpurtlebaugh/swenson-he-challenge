exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable("machines", (table) => {
        table.increments("id").primary();
        table.string("sku");
        table.string("type");
        table.string("model");
        table.boolean("waterline");
      })
    ]);
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable("machines"),
      ]); 
};
