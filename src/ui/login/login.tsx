
import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.scss'
import { useLoginMutation } from '../../services/auth.service';
import { ChangeEvent, FormEvent, useState } from 'react';

const Login = () => {
    const navigate=useNavigate()
    const [login,{data}]=useLoginMutation()
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    
const SignIn= async (e:FormEvent)=>{
    e.preventDefault()
    await login({email,password}).unwrap()
    
   
}
const ChangePassword=(e:ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
}
const ChangeEmail=(e:ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
}

if(data?.accsess){
    navigate('/')
    localStorage.setItem('token', data.token)
}

return (
    <div className={styles.loginBlock}>
        <div className="container">
        <div className={styles.formWrapper}>
        <form className={styles.loginBlockWrapper} onSubmit={SignIn}>

       
        <h2 className={styles.loginTitle}>Login</h2>
        <input type="email" className={styles.inputEmail} placeholder='Email'  onChange={(e)=>ChangeEmail(e)} value={email}/>
        <input type="password" className={styles.inputPassword} onChange={(e)=>ChangePassword(e)} placeholder='Password' value={password}/>
        <button className={styles.signBtn} type='submit' >Sign-In</button>
        <p className={styles.link}>You dont have an acount? <span><Link to={"/register"}>Register</Link></span></p>
       
        </form>
        </div>
        </div>
        
    </div>
)


}

export default Login