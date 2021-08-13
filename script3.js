// let dato =prompt ("ingrese el numero");

// if (Math.sign(dato)===1){

//     alert("positvo")

// }else{

//     alert("negativo")

// }

// function primo(numero) {

//     for (let i = 2; i < numero; i++) {

//       if (numero % i === 0) {
//         return false;
//       }

//     }

//     return numero !== 1;
//   }

//   let numero =prompt ("ingrese el numero");

//   alert ("el numero es " + primo(numero))

// let numero =prompt ("ingrese el numero");
// let unidad =prompt ("a cual convertir C o F").toLowerCase();
// let final

// if(unidad==="f"){

//     final = (numero * 1.8) + 32;

// }else{

//     final =(numero - 32) * 0.555;
// }
// console.log (unidad)
// console.log (final)
// alert (final + " " + unidad );

// const pidoValor = () => {
//   let number = prompt("ingrese el numero o total para finalizar");
//   let checknumber;
//   let total = 0;
//   let fin;

//   if (number === null) {
//     number = "sin dato;";
//   }

//   checknumber = +number;

//   if (checknumber) {
//     total = checknumber;
//   } else {
//     number = number.toLocaleLowerCase();
//     if (number === "total") {
//       flag = "total";
//       return total;
//     } else {
//       alert("no es valor valido");
//       total = 0;
//       return total;
//     }
//   }

//   return total;
// };

// let flag;
// let final = 0;

// while (flag !== "total") {
//   final = final + pidoValor();
// }

// alert(`la cantidad total es ${final}`);

// const Listado = [
//   "Lucas",
//   "Matias",
//   "Jose",
//   "Pedro",
//   "Martina",
//   "Marcelo",
//   "Esteban",
//   "Marcela",
//   "Martin",
// ];

// const ListadoOk = [
//   ["Lucas", true, 3],
//   ["Matias", true],
//   ["Jose", true, 1],
//   ["Pedro", true],
//   ["Martina", true],
//   ["Marcelo", true],
//   ["Esteban", true, 1],
//   ["Marcela", false],
//   ["Martin", true],
// ];
//console.log("cantidad " +Listado.length)
//console.log("ultimo " +Listado[Listado.length-1])

// Listado[Listado.length + 1] = "Pedro";

// Listado.forEach((item) => {
//   console.log(item);
// });

// ListadoOk.forEach((item) => {

//     if (item[1]){
//     console.log(item[0]);
//     }

// });
// let suma = 0;
// ListadoOk.forEach((item, id) => {
//   if (item[1]) {
//     if (item[2]) {
//       suma = suma + item[2];
//     } else {
//       suma = suma + 4;
//     }
//   }
// });

// console.log(suma);
// console.log(Listado.sort());

// class Deporte {
//   constructor(names, members) {
//     this.names = names;
//     this.members = members;
//   }

//   muestra() {
//     console.log(
//       `El deporte ${this.names} tiene ${this.members} jugadores/jugador`
//     );
//   }

//   team() {
//     if (this.members === 1) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// const futbol = new Deporte("futbol", 11);
// const tenis = new Deporte("tenis", 4);
// const aerobico = new Deporte("aerobico", 1);

// futbol.muestra();
// console.log(futbol.team());

// aerobico.muestra();
// console.log(aerobico.team());

// const Andrea= {
//     cervezas=2,
//     sandwich=2,
//     bolsa_papas=1
// }

// const Martin= {
//     cervezas=2,
//     sandwich=2,
//     bolsa_papas=1
// }


// setTimeout (()=> console.log("juan"),3);
// setTimeout (()=> console.log("mario"),2);
// setTimeout (()=> console.log("martin"),1);

// const temporizador= (second) => {
    
//     setTimeout(() => {
//         if(second<0) return;
//         console.log(second);
//         temporizador(second-1);
        
//     }, 1000);

// };
     



// temporizador(10);
// const baseUrl= "https://api.github.com/"

// const getPublicRepositorie = async()=> {

//     try {

//         const response= await fetch(`${baseUrl}repositories`);
//         const jsonResponse= await response.json();
//         return jsonResponse;

//     } catch(error){
//         console.log(error);
//     }
    
// }


// console.log(getPublicRepositorie().then((response)=>console.log(response)))

const baseUrl= "https://api.github.com/"

const getPublicRepositories = async()=> {

    try {

        const response= await fetch(`${baseUrl}repositories`);
        const jsonResponse= await response.json();
        return jsonResponse;

    } catch(error){
        console.log(error);
    }
    
}


// const getOwnerName = async ()=>{

//     const repositories=await getPublicRepositories();
//     const nameArray= repositories.map((repo)=>repo.owner.login);
//     console.log(nameArray);
// }

// getOwnerName();

const getRepositoriesFromOwner = async ()=>{

    const repositories=await getPublicRepositories();
    const FirstRepository=repositories[0];
    const RepoEndPoint=FirstRepository.owner.repos_url

    const reposResponse= await fetch (RepoEndPoint)
    const jsonResponse= await reposResponse.json()

    console.log(jsonResponse);
}

getRepositoriesFromOwner();
