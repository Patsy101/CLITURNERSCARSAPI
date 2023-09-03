#!/usr/bin/env node

const program = require('commander');
const { addCar, findCar, updateCar, removeCar, listCar } = require('./index');

program.version('1.0.0').description('Client Management System');

const questions = [
  {
    type: 'input',
    name: 'Make',
    message: 'Make Car',
  },
  {
    type: 'input',
    name: 'Model',
    message: 'Make Model',
  },
  {
    type: 'input',
    name: 'Year',
    message: 'Make Year',
  },
  {
    type: 'input',
    name: 'Amount',
    message: 'Amount Willing to Pay',
  },
];
//adding command
program
  .command('add')
  .alias('a')
  .description('Add a car')
  .action(() => {
    import('inquirer').then(async (inquirer) => {
      const { prompt } = inquirer.default; // Use .default to access inquirer
      const answers = await prompt(questions);
      addCar(answers);
    });
  });
//find command
program
  .command('find <name>')
  .alias('f')
  .description('Find a car')
  .action((name) => findCar(name));
//update command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a car')
  .action((_id) => {
    import('inquirer').then(async (inquirer) => {
      const { prompt } = inquirer.default; // Use .default to access inquirer
      const answers = await prompt(questions);
      updateCar(_id, answers);
    });
  });

//Remove command
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a car')
  .action((_id) => removeCar(_id));
// List command
program
  .command('list')
  .alias('l')
  .description('list a cars')
  .action(() => listCar());
program.parse(process.argv);
