import { useState } from 'react'
import style from './Contact.module.css'
export default function Contact() {

const [name, setName] = useState('');
const [age, setAge] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  return <>
  

  <section className='py-5'>
    <div className='d-flex flex-column justify-content-center align-items-center'>
    
    <h2 className='text-uppercase'>conatct section</h2>
  <div className='d-flex align-items-center'>
            <div className={`divLayout divLayoutColor`}></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className={`divLayout divLayoutColor`}></div>
        </div>
        
      


  </div>

   <div className="d-flex flex-column justify-content-center align-items-center py-5">
  <div className='w-50 mb-5 position-relative'>

    {name==''?<label htmlFor="user-name" className={`form-label ${style.inputNonOpac} position-absolute`}>userName :</label>:<label htmlFor="user-name" className={`form-label ${style.inputOpac} position-absolute`}>userName :</label>}
    
  <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" id="user-name" placeholder='userName'/>
  </div>


  <div className='w-50 mb-5 position-relative'>
    {age==''?<label htmlFor="user-age" className={`form-label ${style.inputNonOpac} position-absolute`}>userAge :</label>:<label htmlFor="user-age" className={`form-label ${style.inputOpac} position-absolute`}>userAge :</label>}
 
  <input onChange={(e)=>{setAge(e.target.value)}} type="number" className="form-control" id="user-age" placeholder='userAge'/>
  </div>


  <div className='w-50 mb-5 position-relative'>
    {email==''?<label htmlFor="user-email" className={`form-label ${style.inputNonOpac} position-absolute`}>userEmail :</label>:<label htmlFor="user-email" className={`form-label ${style.inputOpac} position-absolute`}>userEmail :</label>}
    
  <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="user-email" placeholder='userEmail'/>
  </div>


  <div className='w-50 mb-5 position-relative'>
    {password==''?<label htmlFor="user-password" className={`form-label ${style.inputNonOpac} position-absolute`}>userPassword :</label>:<label htmlFor="user-password" className={`form-label ${style.inputOpac} position-absolute`}>userPassword :</label>}
    
  <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="user-password" placeholder='userPassword'/>
  </div>
  <div className='w-50'>
    <button className={`${style.btnn} p-2 rounded-2`}>Send Message</button>
  </div>
 
</div>

  </section>


  
  </>
}
