var installDeps = require('./workshop-setup').installDeps

installDeps(process.cwd()).then(() => {
  console.log('👍  all dependencies installed')
})
