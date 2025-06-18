import { IoMdWarning } from "react-icons/io"

const Error = () => {
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 bg-white flex-center flex-col">
      <IoMdWarning />
      <h1 className="text-lg font-open mt-2">Unknown Error</h1>
      <p className="text-sm">An unexpected error occured</p>
      <button className="bnt-black mt-2">Go back</button>
    </section>
  )
}

export default Error