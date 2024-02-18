function fetchUserData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('User data fetched');
        }, 2000);
        setTimeout(function () {
            reject('User data not fetched');
        }, 2000);
    });
}
function processData(userData) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Processed: ".concat(userData));
        }, 1000);
    });
}
fetchUserData()
    .then(function (userData) {
    console.log(userData);
    return processData('userData');
})
    .then(function (processData) {
    console.log(processData);
})
    .catch(function (error) {
    console.error(error); // Output: Failed to fetch user data
});
