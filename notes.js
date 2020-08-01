const fs = require("fs")
const chalk =require("chalk")
const getnotes =() =>{
    return "your notes ..."
}

const listnotes = () => {
    const notes =loadnotes()
    notes.forEach((note)=>{
        console.log(chalk.magentaBright.bold(note.title))})
}


const readNote=(title)=>
{
    const notes=loadnotes()
    const toprint = notes.find((note)=>note.title == title)
    if(toprint)
    {
        console.log(chalk.cyanBright.bold.inverse("TITLE :"+toprint.title))
        console.log(chalk.cyanBright.bold.inverse("BODY :"+toprint.body))
    }
    else{
        console.log(chalk.red.bold("title not found"))
    }
}
const addnote=(title,body)=>
{
    const notes = loadnotes()
    //const dupli = notes.filter((note)=> note.title === title)
    const duplinote = notes.find((note)=>note.title === title)

     // const dupli = notes.filter(function(note) {
    //     return note.title === title
    // })
    //if(dupli.length===0)
    if(!duplinote)
    {
        notes.push({
            title:title,
            body:body
        })
        console.log(chalk.cyanBright.bold("Note added"))
        savenotes(notes)
    }
    else{
        console.log(chalk.red.bold("alredy taken"))
    }

    // const duplii = notes.filter(function(notee) {
    //     return notee.body === body
    // })
    // if(duplii.length===0)
    // {
    //     notes.push({
    //         body:body
    //     })
    //     savenotes(notes)
    // }
    // else{
    //     console.log(chalk.red.bold("alredy BODY taken"))
    // }
    
}

const removenote= (title) =>{
    const notes =loadnotes()
    const notestokeep=notes.filter((note) =>note.title!==title)
    //const notestokeep=notes.filter(function(note)
    // {
    //     return note.title!==title
    // })
    if(notes.length>notestokeep.length)
    console.log(chalk.green.bold("note removed"))
    else
    console.log(chalk.red.bold("note not removed"))

    const ch=savenotes(notestokeep)
    

}



const savenotes=(notes)=>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}


const loadnotes=()=> {
    try{
        const databuffer = fs.readFileSync("notes.json")
        const bufferJSON = databuffer.toString()
        return JSON.parse(bufferJSON)

        }catch(e)
    {
        return []
    }

}
module.exports={
    getnotes:getnotes,
    addnote:addnote,
    removenote:removenote,
    listnotes:listnotes,
    readNote:readNote
}