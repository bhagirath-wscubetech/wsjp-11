const divide = (a, b) => {
    return new Promise(
        (res, rej) => {
            if (a > b) {
                res(a / b);
            } else {
                rej("A is lesser than b");
            }
        }
    )
}

divide(10, 14)
    .then(
        (success) => {
            console.log(success)
        }
    )
    .catch(
        (error) => console.log(error)
    )


// // promise handling
// async function getData() {
//     fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//             .then(data => console.log(data))
//             .catch((err) => console.log(err))
//         .catch((err) => console.log(err));

//     console.log('Hii');


//     // const response = await fetch('https://fakestoreapi.com/products');
//     // const data = await response.json();
//     // console.log(data);
//     // console.log('Hiii');
// }

// getData();