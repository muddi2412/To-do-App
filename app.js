var list = document.getElementById('list');


function itemSave() {
    var todo_item = document.getElementById('todo-item');

    //Create Li tag with text
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)




    // create delete button 
    var delBtn = document.createElement('button')
    var delText = document.createTextNode('Delete')
    delBtn.appendChild(delText)
    delBtn.setAttribute('onclick', 'deleteItem(this)')
    delBtn.setAttribute('class', 'cusbtn1')



    // edit button

    var editBtn = document.createElement('button')
    var editText = document.createTextNode('Edit')
    editBtn.appendChild(editText)
    editBtn.setAttribute('onclick', 'editItem(this)')
    editBtn.setAttribute('class', 'cusbtn')


    li.appendChild(editBtn)
    li.appendChild(delBtn)
    list.appendChild(li)

    todo_item.value = ""




}


function deleteItem(del) {
    del.parentNode.remove()
}


function deleteAll() {
    list.innerHTML = ""
}


function editItem(edit) {
    // var editedValue = edit.parentNode.firstChild.nodeValue;
    var promptValue = prompt("Enter Your Edit Item", edit.parentNode.firstChild.nodeValue);
    edit.parentNode.firstChild.nodeValue = promptValue;



}