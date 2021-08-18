import React ,{useEffect}  from 'react'
import TodoList from './Todo/TodoList' 
import Context from './context'
import AddTodo from './Todo/addTodo'
import Loader from './Loader'
import Modal from './Modal/Modal'

function App() { 

  const[todos , setTodos] = React.useState([])
  const [loading , setLoading] = React.useState(true)

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(response => response.json())
    .then(todos => {
      setTimeout(() => {
        setTodos(todos)
        setLoading(false)
      },2000)
    })
},[])



function toggleTodo(id){
  setTodos(
  todos.map(todo=>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo
  })
  )
}
function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}
function addTodo(title){
  setTodos(
    todos.concat([{
      title ,
      id: Date.now() ,
      completed: false
      }
    ])
  )

}
  return (
    <Context.Provider value={{removeTodo}}>  
      <div className = ' wrapper'>
          <h1> React Tutorial</h1>
          <Modal />
          <AddTodo  onCreate={addTodo}/>

          {loading &&  <Loader></Loader>}
          {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo} />) 
          :loading ? null : (<p>no todos</p>)} 

          
      </div>
    </Context.Provider>
  )
}

export default App;
