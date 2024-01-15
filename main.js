// Utilizing the skills we learned in class today, your task is to develop a simple "To-Do" application.

// Assignment Objectives:

// Please ensure that your application includes the following features:

// 1. Form Creation: Develop a form to add a to-do item. Each to-do item should include a title and a description.

// 2. Displaying To-Do Items: Render each to-do item on the webpage.

// 3. Interactive To-Do Items: Add
// a click event listener to each to-do item. When clicked, the item
// should either be marked as done by modifying its style or be removed
// from the list entirely.


function titleCase(string){
    let output = ''
    const words = string.split(' ')
    for (let i = 0; i< words.length; i++){
      output += words[i][0].toUpperCase() + words[i].substring(1) + ' '
    }
    return output.trim(' ')
}

const taskBox = document.getElementById('task-box')
const listContainer = document.getElementById('list-container')

function addTask(){
    if (taskBox.value == ''){
        alert("You did not enter a task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = taskBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    
    }
    taskBox.value = ""
    saveData()
}

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()

    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()

    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")

}
showData()