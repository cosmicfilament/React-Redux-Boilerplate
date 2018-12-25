const chalk = require('chalk');

module.exports = (env = {}) => {

    const buildMode = (env.prod) ? './webpack.prod.config.js' : './webpack.dev.config.js';

    console.log(chalk.blue(`**\n  => Building: ${env.prod ? "PRODUCTION" : "DEVELOPMENT"}\n**\n`));

    return require(buildMode);
};
