/* eslint-disable func-names */
const colorSet = {
  Reset: "\x1b[0m",
  Red: "\x1b[31m",
  Green: "\x1b[32m",
  Yellow: "\x1b[33m",
  Blue: "\x1b[34m",
  Magenta: "\x1b[35m"
};

const funcNames = ["info", "log", "warn", "error"];
const colors = [colorSet.Green, colorSet.Blue, colorSet.Yellow, colorSet.Red];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < funcNames.length; i++) {
  const funcName = funcNames[i];
  const color = colors[i];
  const oldFunc = console[funcName];
  console[funcName] = function () {
    // eslint-disable-next-line prefer-rest-params
    let args = Array.prototype.slice.call(arguments);
    if (args.length) args = [color + args[0]].concat(args.slice(1), colorSet.Reset);
    oldFunc(...args);
  };
}

export default console;
