const os = require('os');

const operatingSystem = `
  Homefolder:   ${os.homedir}
  Temp folder:  ${os.tmpdir}
  Hostname:     ${os.hostname}
  Platform:     ${os.platform}
  Release:      ${os.release}
  Architecture: ${os.arch}
  Total Memory: ${Math.round(os.totalmem / 1073741824)} GB
  Free Memory:  ${os.freemem / 1048576} MB
  Percent used: ${((os.totalmem - os.freemem) / os.totalmem * 100).toFixed(2)} %
  Uptime:       ${os.uptime} s
`

console.log(operatingSystem);
