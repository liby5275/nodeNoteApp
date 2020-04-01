const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const fs = require('fs')

//fetching data from anothr file through function
const note = notes()
console.log(note)

//using npm chalk module to print data
console.log(chalk.bgYellow.red(validator.isEmail(note)))
console.log(validator.isURL(note))


//using simple command line argument processing.
//using node module process.argv
const command = process.argv[2]
        const message = process.argv[3]
        if(command==='add'){
        fs.writeFileSync('sample.txt', message)
        } else if(command ==='append'){
            fs.appendFileSync('sample.txt', message)
        } else if(command === 'remove') {
            fs.unlinkSync('sample.txt')
        }        


//command line argument processing using yargs


yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'adding note to the file',
    handler: function() {
        fs.writeFileSync('sample.txt', yargs.argv.message)
    }
}).argv

yargs.command({
    command:'append',
    describe:'appending note to the file',
    handler: function() {
        fs.appendFileSync('sample.txt', yargs.argv.message)
    }
}).argv

yargs.command({
    command:'remove',
    describe:'removing the file',
    handler: function() {
        fs.unlinkSync('sample.txt')
    }
}).argv

yargs.command({
    command:'list',
    handler: function() {
        fs.readFileSync('sample.txt')
    }
}).argv

