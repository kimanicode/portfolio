
import { useState } from 'react';
import './App.css';

function App() {
  const [formData , setFormData] = useState({
    username:"",
    password:"",
    confirmPassword:"",
    newletter:''
})
function handleChange(event){
  const { name , value , type, checked} = event.target
  setFormData((prevData)=>{
    return {
      ...prevData , [name]:type === 'checkbox'? checked: value
    }
     
    

  });

  



}

function handleSubmit(e){
  e.preventDefault()

  if(formData.password === formData.confirmPassword){
    alert('login Successful')
  }
  else{
    alert('Wrong Credentials')
  }
 
  
}
console.log(formData)
  


  return (
    <>
    <div className='App'>
      <form>
        <input 
          placeholder='kim@admin.com' 
          name='username'
          type='email'
          onChange={handleChange}
          value= {formData.username}


        />
        <input 
          placeholder='password'
          name='password'
          type='text'
          onChange={handleChange}
          value= {formData.password} 
        />
        <input 
          placeholder='Confirm password' 
          name='confirmPassword'
          type='text'
          onChange={handleChange}
          value= {formData.confirmPassword}
        />
        <div className='check-wrap'>
            <input
               type='checkbox'
               name='newletter'
               onChange={handleChange}
               value={formData.newsletter}
               />
            <label htmlFor='i want to join newslatter'>i want to join newsletter</label>
        </div>
        <button onClick={handleSubmit}>Sign Up</button>

        

      </form>
     

      
    </div>

    </>
  );
}

export default App;
