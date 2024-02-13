

export const SayYes = () =>{

    const option = {
        method: 'PUT'
    }

    fetch('https://valentineapi-dev-jamx.1.us-1.fl0.io/yes',option).then( data => data.json()).then(data => console.log(data));
}

export const SayNo = () =>{

    const option = {
        method: 'PUT'
    }

    fetch('https://valentineapi-dev-jamx.1.us-1.fl0.io/no',option).then( data => data.json()).then(data => console.log(data));
}

