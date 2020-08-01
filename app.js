// const add =require("./util.js")
// const sum=add(4,6)
// console.log(sum);

const yargs=require("yargs")

const chalk=require("chalk")
const notes =require("./notes.js")
const { describe, string, argv } = require("yargs")
// const { require } = require("yargs")
// const msg=notes()
// console.log(msg)

//const a = (chalk.black.bold.bgCyanBright("my name is rohith ",chalk.yellow.underline.bgRed
//.bold("hello world "),chalk.magentaBright.bgBlack.inverse.bold("NODE JS")))
//const b = (chalk.green.bold("node.js compiled !"))
//console.log(b)


//add command
yargs.command({
    command:"add",
    describe:"adding a new note",
    builder:{
        title:{
            describe:"title note",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"body of note",
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.addnote(argv.title,argv.body)
        
        //console.log(chalk.green.bold("TITLE :"+chalk.blue.bold(argv.title)))
        //console.log(chalk.magenta.bold("BODY :")+chalk.cyan.bold(argv.body))
    }
})
//remove command
yargs.command({
    command:"remove",
    describe:"remove the note",
    builder:{
        title:
        {
            describe:"removing note",
            type:"string",
            demandOption:true

        }
},
    handler(argv){
        notes.removenote(argv.title)
       // console.log(chalk.red.bold("removed the note"))
    }
})
yargs.command({
    command:"list",
    describe:"list of argument ",
    handler() {
        console.log(chalk.green.bold("List of titles :"))
        notes.listnotes()
        
    }
})
yargs.command({
    command:"read",
    describe:"reads the note",
    builder:{
        title:{
            describe:"read the title",
            type:"string",
            demandOption:true
        }
    },
    handler(argv)
    {
        notes.readNote(argv.title)
        //console.log(chalk.white.bold.inverse("read the note"))
        
    } 
})
yargs.parse()