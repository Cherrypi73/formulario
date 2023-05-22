'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('pessoas', [
        { nome: 'Sailor', sobrenome: '  Moon', idade:14}, 
        { nome: 'Sailor', sobrenome: 'Mercury', idade:22},
        { nome: 'Sailor', sobrenome: 'Venus', idade:22},
        { nome: 'Sailor', sobrenome: 'netuno', idade:22},
        { nome: 'Sailor', sobrenome: 'Artemis', idade:22}
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('pessoas', null, {});
     
  }
};
