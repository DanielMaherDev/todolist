import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([   'Go to the gym',
    'Eat more fruits and veg',
    'Pick up the kids from school'])
  return ( 
    <main>
     <TodoInput />
     <TodoList todos={todos} /> 
    </main>
  )
}

export default App
