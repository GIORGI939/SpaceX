let getElement=`https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json`


const getUsers = async () => {
    try {
        const ul = document.querySelector('li');
        const users = await fetch(getElement).then(_ => _.json())
        users.forEach(content => {
            const li = document.createElement('li');
            li.innerText = content.name;
            ul.appendChild(li);
            document.querySelector('#title').innerText=content.name;
            document.querySelector('#gmail').innerText=content.email;
            document.querySelector('#numbers').value=content.boxes;
            async function count(set){  
                let key = await set.split(',').map(element => {return Number(element);});
                let count = 0; 
                key.forEach(el => {count += el});    
                return count%10 === 0 ? count/10 : Math.ceil(count/10)
               } 
    
                    const myElement = document.querySelector('#numbers');
                    count(content.boxes).then((res)=> document.querySelector('#sum').innerText=res);
                    myElement.addEventListener("input", ()=> count(document.querySelector(`#numbers`).value)
                    .then((res) => document.querySelector('#sum').innerText=res));

            });   
    }  
    catch (error) {
        console.log(error)}
}

getUsers();


async function Click(all){
    let name = all;
    await fetch(getElement)
    .then((res) =>  res.json())
    .then((data)=> {

    
        data.forEach(content => {
            if (name == content.name) 
           {        
btn.addEventListener(`click`,()=>{
let listgGroupItem=document.createElement(`li`) 
listgGroupItem.classList.add(`list-group-item`)
listgGroupItem.innerText=content.name
li.appendChild(listgGroupItem) 
})
 }
        });
    })
}
Click()

// let list=document.querySelector(`.namelist`)

//         btn.addEventListener(`click`,()=>{
//             let listgGroupItem=document.createElement(`li`) 
//             listgGroupItem.classList.add(`list-group-item`)
//             listgGroupItem.innerText=content.name
//             li.appendChild(listgGroupItem) 
// })

let burger=document.querySelector(`.fa-bars`);
let mobilMenu=document.querySelector(`.ul`)

    burger.addEventListener(`click`,function(){
    mobilMenu.classList.toggle(`active`)
})


// async function response(){
//     let response = await fetch(getElement)
//     let content = await response.json()
//     console.log(content.name);
//     let list=document.querySelector(`#ul`)
//             let key;
//             for (key in content){
//                 const list=document.querySelector(`#namelist`)
//                 list.innerText +=content[key].name
//                 ul.appandChild(list)
//                 document.querySelector('#title').innerText=content[key].name;
//                 document.querySelector('#gmail').innerText=content[key].email;
//                 document.querySelector('#numbers').value=content[key].boxes;
//                 count(content[key].boxes).then((res)=> document.querySelector('#sum').innerText=res);
//                 async function count(set){  
//                     let key = await set.split(',').map(element => {return Number(element);});
//                     let count = 0; 
//                     key.forEach(el => {count += el});    
//                     return count%10 === 0 ? count/10 : Math.ceil(count/10)
//                    } 
                  
//             }      
//         }
// response()


//     let nameList=document.querySelector(`#nameList`)
//     let tite=document.querySelector(`#title`)
//     let gmail=document.querySelector(`#gmail`)
//     let numbers=document.querySelector(`#numbers`)
//     let sum=document.querySelector(`#sum`)
//     async function init() {
//         const daelode = await Click()
//         titleNameList=daelode.map((item)=>{
//             const compNameItem=document.createElement(`li`)
//             compNameItem.textContent=item.name
//             compNameItem.addEventListener(`click`,()=>{
//                 compNameItem.textContent=item.name
//                 gmail.textContent=item.gmail
//                 sum.value=item.boxes
//             })
//             return compNameItem
//     })
//     compNameItem.appendChild(...compNameItem)
// }
// init()
    
