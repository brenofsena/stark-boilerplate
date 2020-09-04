module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.jsx',
        templateFile: 'templates/component.jsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.spec.js',
        templateFile: 'templates/test.spec.js.hbs',
      },
    ],
  });
};
