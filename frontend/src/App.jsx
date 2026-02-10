import { useState, useEffect } from 'react'


import axios from 'axios'



function App() {
  const [joke, setjoke] = useState([])

useEffect(() => {
   axios.get('/api/joke')
   .then ((response) =>{
    setjoke(response.data)
   },)

.catch((error)=>{
  console.log(error)

})
})

  return (
    <>
   <h1>hello one</h1>
   <p>joke: {joke.length}</p>

{
  joke.map((joke, index) => ( 
<div key={joke.id}>
<h3>{joke.title}</h3>
<p>{joke.content}</p>

</div>

  ))
}
    </>
  )
}

export default App
