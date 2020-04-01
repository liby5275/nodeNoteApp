const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'adding note to the file',
     builder:{
        title:{
            describe:'title of the note',
            type:'string',
            demandOption:true
        },
        body:{
            describe:'body of the note',
            type:'string',
            demandOption:true
        }
    }, 
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command:'read',
    describe:'command to read a particular note details',
    builder:{
        title:{
            type:'string',
            demandOption:true
        }
    },
    handler(argv){
        notes.getNotes(argv.title)
    }
})

yargs.command({
    command:'remove',
    describe:'removing the file',
    builder:{
        title: {
            type:'string',
            demandOption:true
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'command to list alll the notes',
    handler() {
        notes.listNotes()
    }
}).argv

