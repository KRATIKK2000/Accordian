let data1=[{
    id:1,
    title:"thisis title 1",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, sequi?"
},{
    id:2,
    title:"thisis title 2",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, sequi?"
},{
    id:3,
    title:"thisis title 3",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, sequi?"
},{
    id:4,
    title:"thisis title 4",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, sequi?"
},{
    id:4,
    title:"thisis title 4",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, sequi?"
}]

let accordianBody=document.getElementsByClassName("accordianBody")
// console.log(accordianBody)
// accordianBody[0].innerHTML=`<h1>ab</h1>`

function showdata(data){
    accordianBody[0].innerHTML=data.map((currentdata)=> {
        return(` 
         <div class="container">
         <div class="accordian_title">${currentdata.title}</div>
         <div class="accordian_body">${currentdata.body}</div>
         </div>`)}
   //  console.log(currentdata)
   ).join(" ")
}
showdata(data1)

let accordian_title= document.querySelectorAll(".accordian_title")
let accordian_body= document.querySelector(".accordian_body")
// console.log(accordian_body,"kl")
accordian_title.forEach((currenttitle) => {
    currenttitle.addEventListener("click",(e)=>{
   
        if(currenttitle.classList.contains("active")){
            currenttitle.classList.remove("active") 
        }
        else{
            let getactiveclass= document.querySelectorAll(".active")
            getactiveclass.forEach((ele)=>{
                ele.classList.remove("active")
            })

            currenttitle.classList.add("active")
        }
     
        
    })
});


// console.log(accordian_title)










