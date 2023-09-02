#!/usr/bin/env node

const program = require('commander');
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomer,
} = require('./index');

program.version('1.0.0').description('Client Management System');

const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Customer First Name',
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Customer Last Name',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer Email Address',
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer Phone Address',
  },
];
//adding command
program
  .command('add')
  .alias('a')
  .description('Add a customer')
  .action(() => {
    import('inquirer').then(async (inquirer) => {
      const { prompt } = inquirer.default; // Use .default to access inquirer
      const answers = await prompt(questions);
      addCustomer(answers);
    });
  });
//find command
program
  .command('find <name>')
  .alias('f')
  .description('Find a customer')
  .action((name) => findCustomer(name));
//update command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a customer')
  .action((_id) => {
    import('inquirer').then(async (inquirer) => {
      const { prompt } = inquirer.default; // Use .default to access inquirer
      const answers = await prompt(questions);
      updateCustomer(_id, answers);
    });
  });

//Remove command
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a customer')
  .action((_id) => removeCustomer(_id));
// List command
program
  .command('list')
  .alias('l')
  .description('list a customers')
  .action(() => listCustomer());
program.parse(process.argv);

// const program = require('commander');
// //making it user friendly

// const { prompt } = require('inquirer');

// const { addCustomer, findCustomer } = require('./index');
// //Customer Questions
// const questions = [
//   {
//     type: 'input',
//     name: 'firstname',
//     message: 'Customer First Name',
//   },
//   {
//     type: 'input',
//     name: 'lastname',
//     message: 'Customer Last Name',
//   },
//   {
//     type: 'input',
//     name: 'email',
//     message: 'Customer Email Address',
//   },
// ];

// program.version('1.0.0').description('Client Management System');

// // program
// //   .command('add <firstname> <lastname> <phone> <email>')
// //   .alias('a')
// //   .description('Add a customer')
// //   .action((firstname, lastname, phone, email) => {
// //     addCustomer({ firstname, lastname, phone, email });
// //   });

// program
//   .command('add')
//   .alias('a')
//   .description('Add a customer')
//   .action(() => {
//     prompt(questions).then((answers) => addCustomer(answers));
//   });

// program
//   .command('find <name>')
//   .alias('f')
//   .description('Find a customer')
//   .action((name) => findCustomer(name));
// program.parse(process.argv);
