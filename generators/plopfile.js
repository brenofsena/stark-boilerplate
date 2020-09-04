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
        templateFile: 'templates/component/component.jsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/styles.js',
        templateFile: 'templates/component/styles.js.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{dashCase name}}.spec.js',
        templateFile: 'templates/component/test.spec.js.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{dashCase name}}/{{dashCase name}}.jsx',
        templateFile: 'templates/component/component.jsx.hbs',
      },
      {
        type: 'add',
        path: '../src/pages/{{dashCase name}}/styles.js',
        templateFile: 'templates/component/styles.js.hbs',
      },
      {
        type: 'add',
        path: '../src/pages/{{dashCase name}}/{{dashCase name}}.spec.js',
        templateFile: 'templates/component/test.spec.js.hbs',
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'Create a hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/hooks/use-{{dashCase name}}/use-{{dashCase name}}.js',
        templateFile: 'templates/hook/hook.js.hbs',
      },
      {
        type: 'add',
        path: '../src/hooks/use-{{dashCase name}}/use-{{dashCase name}}.spec.js',
        templateFile: 'templates/hook/test.spec.js.hbs',
      },
    ],
  });

  plop.setGenerator('context', {
    description: 'Create a context',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your context name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/contexts/{{dashCase name}}.js',
        templateFile: 'templates/context/context.js.hbs',
      },
    ],
  });
};
