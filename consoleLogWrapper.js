const vscode = require('vscode');

const consoleLogWrapper = () => {
  const editor = vscode.window.activeTextEditor;
  const preTextWrap = 'console.log(';
  const postTextWrap = ');';
  const selectionText = editor.document.getText(editor.selection);

  const newText = `${preTextWrap}${selectionText}${postTextWrap}`;

  editor.edit(editBuilder => {
    editBuilder.replace(editor.selection, newText);
  });
};

module.exports = consoleLogWrapper;
