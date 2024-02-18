const f=require('fs') 

const filename=process.argv[2]

if(!filename){
    console.error("Enter valid plz");
    process.exit()
}

f.readFile(filename, 'utf-8', (err,data)=>{
    if(err){
        console.error(`Error in reading file : ${err}`);
        process.exit(1)
    }
    console.log('File Content: ');
    console.log(data);
})