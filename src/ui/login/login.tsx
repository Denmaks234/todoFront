
import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.scss'
import { useLoginMutation } from '../../services/auth.service';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import ErrorMessage from '../../components/Errormessage/errorMessage';



const Login = () => {
    const navigate=useNavigate()
    const [login,{data,isError,error}]=useLoginMutation()
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [isShow,setIsShow]=useState(false)
    const [errorMessage,setErrorMessage]=useState('')


    useEffect(()=>{
        if(error){
            if('data' in error) {
               setErrorMessage(String(error.data))
               setIsShow(true)
               setTimeout(()=>{setIsShow(false)},5000)
            }
        }
       
    
    },[isError])
    


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

        
        <ErrorMessage error={errorMessage} isShow={isShow}/>
    </div>
)


}

export default Login