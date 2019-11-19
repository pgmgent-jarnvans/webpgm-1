const os = require('os');

const megaByte = 1 / (1024 ** 2);
const gigaByte = 1 / (1024 ** 2);

const info = `
  Homefolder:   ${os.homedir()}
  Temp folder:  ${os.tmpdir()}
  Hostname:     ${os.hostname()}
  Platform:     ${os.platform()}
  Release:      ${os.release()}
  Architecture: ${os.arch()}
  Total Memory: ${os.totalmem() * gigaByte} GB
  Free Memory:  ${(os.freemem() >= (1024 ** 3)) ? os.freemem() * gigaByte + ' GB' : os.freemem() * megaByte + ' MB'}
  Percent used: ${(100 - (os.freemem() / os.totalmem()) * 100).toFixed(2)} %
  Uptime:       ${os.uptime}
`;

console.log(info);
