
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useSignupMutation } from '../../services/auth.service'
import styles from './register.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/Errormessage/errorMessage'
const Register = () => {

    const [signup,{data,error,isError}]=useSignupMutation()
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')
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

    const ChangeEmail=(e:ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }

    const ChangePassword=(e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }

    const ChangeUsername=(e:ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value)
    }

    const signUp= async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        await signup({email,password,username})
    }


    if(data?.accsess){
        navigate('/')
        localStorage.setItem('token', data.token)
    }

return (
    <div className={styles.loginBlock}>
        <div className="container">
        <div className={styles.formWrapper}>
        <form className={styles.loginBlockWrapper} onSubmit={(e)=>signUp(e)}>

           
            <h2 className={styles.loginTitle}>Register</h2>
        <input type="text" className={styles.InputUsername} placeholder='Username' onChange={(e)=>ChangeUsername(e)} value={username}/>
        <input type="email" className={styles.inputEmail} placeholder='Email' onChange={(e)=>ChangeEmail(e)} value={email}/>
        <input type="password" className={styles.inputPassword} placeholder='Password'onChange={(e)=>ChangePassword(e)}  value={password} />
        <button className={styles.signBtn} type='submit'>Sign-Up</button>
        <p className={styles.link}>You have an acount? <span><Link to={'/login'}>Login</Link></span></p>
           
       
        </form>
        </div>
        </div>
        <ErrorMessage error={errorMessage} isShow={isShow}/>
    </div>
)


}

export default Register