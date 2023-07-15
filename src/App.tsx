import  './App.scss'
import HomePage from './pages/HomePage/Home'
import LoginPage from './pages/LoginPage/Login'
import RegisterPage from './pages/RegisterPage/Register'
import { Route,Routes } from 'react-router-dom'




const App = ()=>{
   
    return (
        <div className="todo">

            

            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
            </Routes>
            
         
            


        </div>
    )
}

export default App;