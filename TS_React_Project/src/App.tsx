import './App.css'

function App() {

  const todo = {
    title: "Next.js !!",
    description: "Finish Next.js in July!",
    done: false
  }

  return <TodoRender item={todo}/>
}

interface TodoType{
  title: string;
  description: string;
  done: boolean
}

interface PropType{
  item: TodoType
}

function TodoRender({ item } : PropType){
  return <div>
    <h1>{item.title}</h1>
    <p>{item.description}</p>
    <h3>{`${item.done}`}</h3>
  </div>
}

export default App
