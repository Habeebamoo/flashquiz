import { FaCheckCircle } from "react-icons/fa"
import { MdCancel } from "react-icons/md"

interface ModalType {
  type: "success" | "error" | "",
  showModal: React.Dispatch<React.SetStateAction<boolean>>,
  head: string,
  body: string,
}

const Modal = ({ type, showModal, head, body }: ModalType) => {
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 bg-modal flex-center">
      <div className="bg-white border-1 border-accentCold max-sm:w-[90%] max-sm:px-2 w-[400px] rounded-md py-6 flex flex-center flex-col">
        {type === "error"  
        ? <MdCancel size={60} color="red" /> 
        : <FaCheckCircle size={50} color="green" />}
        <h2 className="text-lg font-open mt-2">{head}</h2>
        <p className="text-center text-sm">{body}</p>
        <button onClick={() => showModal(false)} className="w-[100px] btn-black mt-3">Ok</button>
      </div>
    </section>
  )
}

export default Modal