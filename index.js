

const fetch = require('node-fetch');
const fileSystem = require('fs');
const { clear } = require('console');

async function getUser() {

    let resp = await fetch("http://randomuser.me/api/?results=20");
    if (resp.ok) {
        let user= await resp.json();        
        user.results.forEach(randomUser =>
            fileSystem.appendFile('usuarios.csv',
                `${randomUser.name.first}, ${randomUser.name.last}, ${randomUser.email}, ${randomUser.dob.age}, 
                 ${randomUser.gender}, ${randomUser.login.username}, ${randomUser.login.password}\n`,
                (err) => {
                    if (err) throw err;
                    console.log('Dados adicionadas ao arquivo usuario.csv');
                }
            ));
    }
}
getUser();



