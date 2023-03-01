'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrementIdentity: true,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING,
        validate: {
          is: ["^[a-z]+$", 'i'],
          max: 50
        }
      },
      middleName: {
        type: Sequelize.STRING,
        validate: {
          is: ["^[a-z]+$", 'i'],
          max: 50,
          notEmpty: true,
        }
      },
      lastName: {
        type: Sequelize.STRING,
        validate: {
          is: ["^[a-z]+$", 'i'],
          max: 50,
          notEmpty: true,
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
      },
      password: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
