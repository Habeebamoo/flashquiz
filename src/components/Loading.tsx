import logo from "../assets/logo.png"

const Loading = () => {
  return (
    <main className="bg-white dark:bg-[#222] fixed top-0 left-0 right-0 bottom-0 z-[100] flex-center">
      <img src={logo} className="animate-pulse h-15" />
    </main>
  )
}

export default Loading