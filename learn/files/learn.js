const fsPromises=require('fs').promises
const path=require('path')

const fileOps=async()=>{
    try{
        const data=await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname,'files','promisewrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'files','promisewrite.txt'),'\n\n Nice to meet you');
        await fsPromises.rename(path.join(__dirname,'files','promisewrite.txt'),path.join(__dirname,'files','updatedwrite.txt'));
        
    }catch(err){
        console.error(err);
    }
}

// fs.readFile('./files/start.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })

// fs.writeFile(path.join(__dirname,'files','reply.txt'),'nice to meet you',(err)=>{
//     if(err)throw err;
//     console.log('write complete');

//     fs.appendFile(path.join(__dirname,'files','reply.txt'),'/n/n yes it is',(err)=>{
//         if(err)throw err;
//         console.log('append complete');

//         fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','newreply.txt'),(err)=>{
//             if(err)throw err;
//             console.log('rename complete');
//         })
//     })
// })
 



process.on('uncaughtException',err=>{
    console.error(`there was an uncaught error : ${err}`);
    process.exit(1);
}) 