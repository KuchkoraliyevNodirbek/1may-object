

const programma = () => {
    let n = prompt("somii kiriting...")
    let obj = [];
    for (let i = 0; i < n; i++) {
        let name = prompt("ism kiriting..")

        let age = prompt("yosh kiting..")
        let email = prompt("email kiting..")
        let phone = +prompt("phone kiting..")



        let objs = {
            name,
            age,
            email,
            phone
        }

        obj.push(objs)
    }

    console.log(obj)
}

programma()