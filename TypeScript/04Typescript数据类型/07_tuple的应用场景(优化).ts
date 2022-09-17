// hook: useState
// const [counter, setCounter] = {counter: , setCounter:}

function useState<T>(state: T): [T, (newValue: T) => void] {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  const info: [string, number] = ["abc", 18]
  const tuple: [T, (newState: T) => void] = [currentState, changeState]
  return tuple
}

const [counter, setCounter] = useState(10);
setCounter(1000)
const [title, setTitle] = useState("abc")
const [flag, setFlag] = useState(true)


type MyFunction = () => void
const foo: MyFunction = () => { }
export { }

