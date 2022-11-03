var myNodeList = document.getElementsByTagName("li")

console.log('============= myNodeList',myNodeList)

for(var i = 0 ; i < myNodeList.length ; i++) {
    var span = document.createElement("span")
    var edit = document.createElement("span")
    var textSpan = document.createTextNode("x")
    var textEdit = document.createTextNode("edit")
    span.appendChild(textSpan)
    edit.appendChild(textEdit)
    edit.className = "edit"
    span.className = "close"
    myNodeList[i].appendChild(edit)
    myNodeList[i].appendChild(span)
}


function newElement(){
    var li = document.createElement("li")
    var inputValue = document.getElementById("myInput").value
    var textNode = document.createTextNode(inputValue)
    li.appendChild(textNode)
    if(inputValue === ""){
        alert("you must write something !")
    }else{
       document.getElementById("myUL").appendChild(li) 
       document.getElementById("myInput").value = ""
    }

    var span = document.createElement("span")
    var textSpan = document.createTextNode("x")
    span.className = "close"
    span.appendChild(textSpan)
    li.appendChild(span)
}

var close =  document.getElementsByClassName("close")

console.log('============= close',close)

for(var i = 0; i < close.length; i++){
    close[i].onclick = function(){
         var div = this.parentElement
         div.style.display = 'none'
    }
}

var list = document.querySelector('ul')
list.addEventListener('click', function(event){
    console.log('============= event',event)
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked')
    }
} , false)

var close = document.getElementsByClassName("edit")

console.log('============= close',close)

for(var i=0; i<close.length ; i++){
    close[i].onclick = function(){
        const div = this.parentElement
         console.log('============= div',div)
    }
}


