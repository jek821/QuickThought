/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  return knex('count')
    .del() // Optional, if you want to clear the table before seeding
    .then(() => {
      // Inserts a row with id = 1 and value = 0
      return knex('count').insert([{ id: 1, value: 0 }]);
    });
};
