function fetchUserData():Promise<String>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('User data fetched')
        },2000)
        setTimeout(()=>{
            reject('User data not fetched')
        },2000)
    })
}

function processData(userData:string):Promise<String>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Processed: ${userData}`)
        },1000)
    })
}

fetchUserData()
.then((userData)=>{
    console.log(userData);
    return processData('userData')
})
.then((processData)=>{
    console.log(processData);
})
.catch((error) => {
    console.error(error); // Output: Failed to fetch user data
  });