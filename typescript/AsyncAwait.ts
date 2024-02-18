async function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('User data fetched')
        },2000)
        setTimeout(()=>{
            reject('User data not fetched')
        },2000)
    })
}

async function processData(){
    console.log("processing");
    
    const data=await fetchUserData()
    console.log("Data processed",data);
    
}

processData()
