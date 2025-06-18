import { useEffect, useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import { useNavigate, useSearchParams } from "react-router-dom"
import Loading from "../components/Loading"

const Verify = () => {
  const [status, setStatus] = useState<"success" | "error" | "">("")
  const [message, setMessage] = useState<string>("")
  const [subMessage, setSubMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [searchParams] = useSearchParams()
  const token: string | null = searchParams.get("token")
  const navigate = useNavigate()
  
  useEffect(() => {
    const verifyEmail = async () => {
      setLoading(true)
      setMessage("")
      setSubMessage("")
      
      try {
        const res = await fetch(`https://flashquiz-backend.onrender.com/api/verify?token=${token}`, {
          method: "POST",
        })

        const response = await res.json()

        if (res.ok) {
          setStatus("success")
          setMessage(response.message)
          setSubMessage("You are now allowed to fully use the application")
        } else {
          setStatus("error")
          setMessage(response.error)
          setSubMessage("Proceed to your account and request for a new email verification")
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    verifyEmail()
  }, [])

  if (loading) return <Loading />

  return (
    <main className="bg-accentCold flex-center h-[100vh]">
      <div className="bg-white rounded-md max-sm:w-[90%] w-[400px] p-6 flex-center flex-col">
        {status == "success" && <FaCheckCircle color="green" size={50} />}
        {status == "error" && <MdCancel color="red" size={60} /> }
        <h1 className="font-open text-xl mt-3">{message}</h1>
        <p className="text-sm text-center">{subMessage}</p>
        <button onClick={() => navigate("/login")} className="btn-black mt-4">Go Back</button>
      </div>
    </main>
  )
}

export default Verify