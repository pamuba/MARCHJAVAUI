import React, {useState, useEffect} from 'react'

function UseEffectDemo() {
  const [count , setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(()=>{
    console.log('Use Effect run one more time')
    document.title = `You Clicked ${count} times`
  }, [count])

  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={()=>setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default UseEffectDemo