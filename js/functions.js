let post = document.getElementsByClassName("submitButton")
let unMarkAll = document.getElementsByClassName("clearButton btn-info")
let markAll = document.getElementsByClassName("markAllButton btn-success")
let deleteAll = document.getElementsByClassName("deleteButton btn-danger")

post[0].addEventListener("click", function(event){
    event.preventDefault();
    newTask();
});

unMarkAll[0].addEventListener("click", function(event){
    event.preventDefault();
    ckeckAll(false);
});

markAll[0].addEventListener("click", function(event){
    event.preventDefault();
    ckeckAll(true);
});

deleteAll[0].addEventListener("click", function(event){
    event.preventDefault();
    deleteTasks();
});

function newTask(){
    let listItem = document.createElement("li");
    let chkbx = document.createElement("INPUT");
    let inputVal = document.getElementsByClassName("newTodo form-control");
    let TextBox = document.createTextNode(inputVal[0].value);

    chkbx.setAttribute("type", "checkbox");
    listItem.appendChild(chkbx);
    listItem.appendChild(TextBox);
    
    if (inputVal[0].value === ''){
        alert("The task must not be empty")
    }

    else {
        document.getElementById("taskList").appendChild(listItem);
    }

    document.getElementsByClassName("newTodo form-control")[0].value = "";
}

function deleteTasks(){
    let list = document.getElementById("taskList");
    let lastElement = list.lastElementChild;
    while(lastElement){
        list.removeChild(lastElement);
        lastElement = list.lastElementChild;
    }
}

function ckeckAll(state){
    let list = document.getElementsByTagName("li");
    console.log(list);
	for(var i = 0; i < list.length; i++){
		list[i].getElementsByTagName("input")[0].checked = state;
	}
}