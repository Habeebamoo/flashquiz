import { useState } from "react"
import Header from "../components/Header"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  const handleLogin = () => {
    window.location.href = "/dashboard"
  }

  const handleAuthType = () => {
    setIsLogin(!isLogin)
  }

  return (
    <main className="bg-accentXlight h-[100vh]">
      <Header button={false} />
      <section className="h-[100vh] flex-center">
        <div className="bg-white border-1 border-accentCold px-4 py-8 rounded-md w-[90%] sm:w-[400px] mx-auto">
          <h1 className="font-inter text-xl text-center">{isLogin ? "Welcome Back" : "Create Your Free Account"}</h1>
          <p className="text-sm text-secondary text-center mb-4">
            {isLogin ? "Sign in back to your account to continue" : "Sign up for a free account today"}
          </p>
          {!isLogin && <div className="mb-3">
            <label htmlFor="name" className="font-inter">Name</label>
            <input type="text" id="name" className="p-2 border-1 border-accent rounded-md block w-full mt-2" required />
          </div>}
          <div className="mb-3">
            <label htmlFor="email" className="font-inter">Email</label>
            <input type="email" id="email" className="p-2 border-1 border-accent rounded-md block w-full mt-2" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="font-inter">Password</label>
            <input type="password" id="password" className="p-2 border-1 border-accent rounded-md block w-full mt-2" required />
          </div>
          <button onClick={handleLogin} className="btn-black mt-2 max-sm:w-full">{isLogin ? "Login" : "Sign Up"}</button>
          <p className="text-sm text-secondary text-center mt-4">
            {isLogin ? "Need an account?" : "Already have an account?"}
            <span onClick={handleAuthType} className="ml-1 text-blue-500 cursor-pointer font-inter">{isLogin ? "Sign Up" : "Login"}</span>
          </p>
        </div>
      </section>
    </main>
  )
}

export default AuthPage