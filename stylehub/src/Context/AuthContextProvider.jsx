import React,{useState} from "react"

export const AuthContext=React.createContext()

function AuthContextProvider({children}){
  const [isAuth,setIsAuth]=useState(false)
  const [isLogin,setIsLogin]=useState(null)

  const login=(text)=>{
    setIsAuth(true)
    setIsLogin(text)
  }
  const logout=()=>{
    setIsAuth(false)
    setIsLogin(null)
  }
  const value={isAuth,login,logout,isLogin}
  return(
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )

}
export default AuthContextProvider