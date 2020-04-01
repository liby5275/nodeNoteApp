const fs = require('fs')
const chalk = require('chalk')


/*
function to add a notte to the fiile
*/
const addNotes =  (title, content) => {
    
    console.log('entering the add notes function')
    const notes = getNoteFileContents()

    debugger
    
    const duplicateTitle = notes.filter((noteIndividual) => {
        return noteIndividual.title === title
    })
    
    if(duplicateTitle.length === 0){
        const note = {
            'title':title,
            'content':content
        }
        notes.push(note)
        fs.writeFileSync('notes.json', JSON.stringify(notes))
    }
    
       
}


/*
function to read a note based on the title
*/
const getNotes = (title) => {
    const notes = getNoteFileContents()
    const noteRequest = notes.filter((note)=>{
        return note.title === title
    })

    if(noteRequest.length >0){
        console.log(chalk.red.bgGreen.bold('the requested note is '+noteRequest[0].content))
    }else {
        console.log(chalk.blue.bgRed.bold('Note not found for this title'))
    }

}



/*
function to remove a note based on the title
*/
const removeNotes = (title) => {
    console.log('remove command with title '+title)
    const notes = getNoteFileContents()

    const notesAfterRemoval = notes.filter((note) =>{
        return note.title != title;
    })
    if(notesAfterRemoval.length < notes.length){
        console.log(chalk.red.bgGreen.bold('Note Removed'))
        fs.writeFileSync('notes.json', JSON.stringify(notesAfterRemoval))
    } else {
        console.log(chalk.blue.bgRed.bold('Note not found'))
    }

    
}


/*
function to list all the notes present in the notes
*/
const listNotes = () => {
    const notes = getNoteFileContents()
    if(notes.length === 0) {
        console.log(chalk.blue.bgRed.bold('No notes present'))
    } else {
        notes.forEach(note => {
            console.log('Note of '+note.title+' is '+note.content)
        });
    }
}


/*
method to get the list of contents from the file.
checks whether the file is present or not. if not present, return an empty list
*/
const getNoteFileContents = () => {
    console.log('entering the getNotesContent function to check the presence of the file')
    try{
        const notesBuffer = fs.readFileSync('notes.json')
        const notesJson = notesBuffer.toString()
        const notes = JSON.parse(notesJson)
        return notes;
    } catch(e) {
        console.log('no such file present in the system')
        return []
    }
}


module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes
}
