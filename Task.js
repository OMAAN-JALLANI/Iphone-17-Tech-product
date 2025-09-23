let btn_org = document.querySelector(".color-img");

function orange() { 
    btn_org.style.backgroundImage = "url('/Images/orange.png')";

}
function blue() { 
    btn_org.style.backgroundImage = "url('/Images/blue.png')";

}
function white() { 
    btn_org.style.backgroundImage = "url('/Images/white.png')";

}



  function addComment() {
let commit = document.querySelector(".commit-btn");
    let newDiv = document.createElement("input");
    newDiv.className = "comment-bubble new";
commit.disabled = true;
commit.innerHTML="Submit";
    document.getElementById("new-comment").appendChild(newDiv);
  }