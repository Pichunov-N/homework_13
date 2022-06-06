import storage from './storage.js'

const getPost = async () => {
    try {
        const findPost = storage.get('body')
        if (findPost == undefined) {
            const request = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const response = await request.json();
            storage.set('body', response);
            storage.remove('title')
        }
    } catch (error) {
        console.error(error);
    }
}

getPost()



const isValidDateFormat = function (str) {
    const regexp = /\d\d\d\d\/\d\d\/\d\d \d\d:\d\d/g;
    const result = str.match(regexp)
    if (result !== null) {
        return true
    } else return false
}

console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false