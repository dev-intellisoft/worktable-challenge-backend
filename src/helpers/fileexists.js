const fs = require('fs')

if(!fs.existsSync(process.argv[2])) {
    console.log('\x1b[31m%s\x1b[0m', `Error: ${process.argv[2]} does not exits`)
    console.log('\x1b[33m%s\x1b[0m', 'You need to create an ".env.development" to proceed!')
    process.exit(1)
}