const { Command, flags } = require('@oclif/command');

const telemetry = require('../../telemetry').init();

var tryRequire = require('try-require');
const Pro = tryRequire('artillery-pro');

class RunCommand extends Command {
  static aliases = ['run-test', 'run-cluster'];
  // Enable multiple args:
  static strict = false;

  async run() {
    const { flags, argv, args } = this.parse(RunCommand);
    Pro.commands.runCluster(args.script, flags);
  }
}

if (Pro) {
  RunCommand.description = Pro.oclif.runTest.description;
  RunCommand.flags = Pro.oclif.runTest.flags;
  RunCommand.args = Pro.oclif.runTest.args;
} else {
  RunCommand.description = 'this command requires artillery-pro';
}

module.exports = RunCommand;
