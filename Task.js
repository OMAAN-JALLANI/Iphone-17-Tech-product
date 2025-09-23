let btn_org = document.querySelector(".color-img");

function orange() { 
    btn_org.style.backgroundImage = "url('./Images/orange.webp')";

}
function blue() { 
    btn_org.style.backgroundImage = "url('./Images/blue.webp')";

}
function white() { 
    btn_org.style.backgroundImage = "url('./Images/white.webp')";

}



  function addComment() {
let commit = document.querySelector(".commit-btn");
    let newDiv = document.createElement("input");
    newDiv.className = "comment-bubble new";
commit.disabled = true;
commit.innerHTML="Submit";
    document.getElementById("new-comment").appendChild(newDiv);
  }