const knex = require('knex')(require('../knexfile'));

// Function to get the current count from the row where id = 1
const getCount = async () => {
    const result = await knex('count').where('id', 1).select('value');
    return result[0]?.value || 0; // If the result is empty or no value is found, return 0
};

// Function to increment the count in the row where id = 1
const incrementCount = async () => {
    // Update the count and retrieve the updated value
    await knex('count').where('id', 1).increment('value', 1);
};

const resetCount = async () => {
    await knex('count').where('id', 1).update('value', 0);
}

module.exports = { getCount, incrementCount };
