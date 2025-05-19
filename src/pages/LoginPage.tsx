import Header from "../components/Header"
import google from "../assets/google.png"

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = "/dashboard"
  }

  return (
    <main className="bg-accentXlight h-[100vh]">
      <Header button={false} />
      <section className="h-[100vh] flex-center">
        <div className="bg-white border-1 border-accentCold px-4 py-8 rounded-md w-[90%] sm:w-[400px] mx-auto">
          <h3 className="font-inter text-lg text-center">Welcome back</h3>
          <p className="text-secondary text-center text-sm">Sign in to your account to proceed</p>
          <div 
            className="flex justify-center items-center p-2 border-1 border-accentCold my-4 rounded-full w-[90%] block mx-auto cursor-pointer"
          >
            <img src={google} className="h-7" />
            <span className="ml-2" onClick={handleLogin}>Sign in with Google</span>
          </div>
          <p className="text-secondary text-[12px] text-center">By proceeding, you agree to our Terms of services and Privacy Policy</p>
        </div>
      </section>
    </main>
  )
}

export default LoginPage