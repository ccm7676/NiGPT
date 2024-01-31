const submitBtn = document.querySelector(".submit");
const textInp = document.querySelector(".text-bar");
const chatContainer = document.querySelector(".chat-container");


function genConv(){
    let newEl = document.createElement("div");
    let newIm = document.createElement("img");
    let newP = document.createElement("p");

    newEl.classList.add("msg");
    newP.innerHTML = textInp.value;
    newIm.src = "https://imgs.search.brave.com/RjS0PFRRD_J_u2MnrGLaP73lTrhBLT7Rm3vLgQH-IKo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDk3NzQ4NDYxMTYt/NzFmYTgzNTIwNzE0/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRoOGZH/UmhjbXNsTWpCaWJI/VmxmR1Z1ZkRCOGZE/QjhmSHd3";
    
    newEl.appendChild(newIm);
    newEl.appendChild(newP);
 
    chatContainer.appendChild(newEl);

    newEl = document.createElement("div");
    newIm = document.createElement("img");
    newP = document.createElement("p");

    newEl.classList.add("msg");
    newP.innerHTML = "Read The Guidance DOCS";
    newIm.src = "https://www.bryanston.co.uk/_site/data/files/images/Staff/E9804866E6EBF35D23AA19BBCA5C6907.jpg";
    
    newEl.appendChild(newIm);
    newEl.appendChild(newP);
 
    chatContainer.appendChild(newEl);
}

submitBtn.addEventListener("click", genConv);
textInp.addEventListener("keypress", (e)=>{
    if(e.key === "Enter") {
        e.preventDefault();
        genConv();
        textInp.value = "";
    }
})
