exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:9000',

  capabilities: {
    browserName: 'chrome'
  },

  specs: ['addTodo.e2e.js', 'removeTodo.e2e.js', 'checkTodo.e2e.js'],
  suites: {
    add: ['addTodo.e2e.js'],
    remove: ['removeTodo.e2e.js'],
    check: ['checkTodo.e2e.js'],
    all: ['addTodo.e2e.js', 'removeTodo.e2e.js', 'checkTodo.e2e.js']
  }
};
