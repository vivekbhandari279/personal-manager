import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'
import { useSelector } from 'react-redux'

function App() {

  const todos = useSelector((state) => state.todos);

  return (
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Your Personal Task Manager</h1>
                    <div className="mb-4">
                        <AddTodos />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {
                        todos.map((todo) => (
                          <Todos todo={todo} key={todo.id} />
                        ))
                        }
                    </div>
                </div>
            </div>
  )
}

export default App
