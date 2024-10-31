import chalk from 'chalk';
import * as fs from 'node:fs';

const msgPath = process.argv[2];
const msg = fs.readFileSync(msgPath, 'utf-8').trim();

const commitRE = /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|release|wip|init)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
    console.error(
      `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
        '不合法的 commit 消息格式'
      )}\n\n`
      + chalk.red(
        '  请使用正确的提交格式:\n\n'
      )
      + `${chalk.yellow('Examples:')}\n\n`
      + `    ${chalk.green('feat: add \'comments\' option')}\n`
      + `    ${chalk.green('fix: handle events on foucs (close #21)')}\n\n`
      + `${chalk.yellow('See The Team Code Guide for more details.')}\n`
    )
    process.exit(1)
}
