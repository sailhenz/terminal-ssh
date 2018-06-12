
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
//const copy = require('copy-paste').copy;
var config = vscode.workspace.getConfiguration('ssh.server', vscode.window.activeTextEditor.document.uri);
/**
 * "ssh.server": {
 *      "servername": "cheesecake",
 *      "host": "sailhenz.server",
 *      "username": "sailhenz",
 *      "password": "petmalulodi"
 * } 
 * 
 */
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    var disposable = vscode.commands.registerCommand('ssh-to-server', function () {
        var sshterm = vscode.window.createTerminal(config.get('servername'));
        sshterm.sendText('ssh ' + config.get('username') + "@" + config.get('host'));
        sshterm.sendText(config.get('password'));
        sshterm.show();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;