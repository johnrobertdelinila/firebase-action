// FIRESTORE

function chat(docs) {
  var area=document.getElementById('areat');
  var dd=document.createElement("div");
  var head=document.createElement('h6');
  var btnd=document.createElement("button");
  btnd.setAttribute("class","btn btn-danger deleteBtn");

  var btt=document.createTextNode("Delete");
  btnd.setAttribute("onclick","deleteitem(this)");
  btnd.setAttribute("id", docs.id);
  btnd.appendChild(btt);
  
  var ct = docs.data().email + ": " + docs.data().chattext;
  var jj=document.createElement('p');
  jj.setAttribute("class","para");

  area.appendChild(jj);
  
  var text=document.createTextNode(ct);

  head.appendChild(text);
  
  head.className="edit";
  dd.appendChild(head);
  dd.appendChild(btnd);

  dd.className="wwa";
  area.appendChild(dd);
}


function enter(){
    var input = document.getElementById('mess');
    var chat= {
      chattext: mess.value,
      email: firebase.auth().currentUser.email
    }
    
    mess.value="";
}

function deleteitem(e){
    e.parentNode.remove();
}

