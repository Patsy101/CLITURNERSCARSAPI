const program = require('commander');
const { addCustomer, findCustomer } = require('./index');

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

program
  .command('find <name>')
  .alias('f')
  .description('Find a customer')
  .action((name) => findCustomer(name));

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
