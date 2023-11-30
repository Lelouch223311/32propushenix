
/*
fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
.catch(error => console.error(error))

*/

/*
async function func() {
    try {
        const data = await fetch('https://dummyjson.com/products/categories')
        const result = await data.json()
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

// func()


async function postData(){
    
    // const data = await response.json()
    const test = () =>{}
    const response = await fetch('https://dummyjson.com/products/categories', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(test),
    });
    console.log(test.json());
    
}

postData()
*/




function loadScript(src){
    let script = document.createElement("script")
    script.src = src;
    document.head.append(script)
    script.onload = () => callback(script);
    console.log('Callback-function')
}


function sayHi(){
    console.log('Hi !')
}

