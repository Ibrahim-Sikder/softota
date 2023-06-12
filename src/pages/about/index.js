import React, { useState } from 'react'

const About = () => {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event)=>{
    setLoading(true)
    event.preventDefault();
    const post = {title}

    try{
       fetch('/api/blog',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      .then(res=>res.json())
      .then(data=>setTitle(data))
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }

  }
  return (
    <div>
      <h2>THi is about page </h2>
      <form onSubmit={handleSubmit}>

        <input name='name' className='border px-3' placeholder='name' /><br/>
        <button type='submit' className='btn btn-secondary'>Submit</button>
      </form>
    </div>
  )
}

export default About
