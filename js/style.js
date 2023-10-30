

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let input = document.getElementById("input").value ;
    ul.innerHTML = ""
    if(input ==''){
        alert("kichu ekta dite hobe")
    }
    else{
        for(i = 1; i <= 10 ; i++){
            let li = document.createElement("li");
            let ul = document.getElementById("ul");
            li.innerHTML = i + " X " + input+ " = " + input *i 
            ul.appendChild(li)
            document.getElementById("input").value = "";
        }
    }
})



