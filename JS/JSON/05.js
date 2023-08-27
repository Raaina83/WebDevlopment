let url="http://universities.hipolabs.com/search?name=india&state-province=";
let btn=document.querySelector("button");
btn.addEventListener("click", async() =>{
    let state=document.querySelector("input").value;
    let colleges=await getColleges(state); //COLLEGES WILL BE IN THE FORM OF ARRAY
    console.log(colleges);
    addClg(colleges);
});

function addClg(colleges){  
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colleges){
        // console.log(col.name);
        let li=document.createElement('li');
        li.innerText=col.name;
        list.appendChild(li);
    }
}

// let country="nepal";
async function getColleges(state){
    try{
        let res=await axios.get(url+state);
        return res.data;
    }
    catch(e){
        console.log(e);
        return "Error"
    }
}