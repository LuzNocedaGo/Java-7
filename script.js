let url = 'https://dummyjson.com/todos'
let todosList = []
let todosHolder = document.querySelector('.todosHolder')

async function GetTodos(){
    let data = await fetch(url)
    let dataJson = await data.json()
    let todos = dataJson.todos
    for(i = 0; i < todos.length; i++){
        let todo = todos[i]
        let todo1 = todo.todo
        let completed = todo.completed
        let userId = todo.userId
        let string = `${todo1} - ${completed} - ${userId}`
        todosList.push(string)
        console.log(string)
    }
    ShowTodos(todosList )
}
GetTodos()



function ShowTodos(list){
    for(let i = 0; i < list.length; i++){
        let p = document.createElement('p')
        p.classList.add('element')
        p.textContent = list[i]
        todosHolder.append(p)
    }
}