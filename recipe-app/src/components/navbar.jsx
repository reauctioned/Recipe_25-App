export default function NavBar() {
  return (
    <nav className="flex  top-0  w-[100%]  justify-between items-center py-4 bg-white drop-shadow-md  flex-col lg:flex-row gap-5 lg:gap-0">
      <div className="flex items-center gap-4"> 
    
        <img src="/public/logo.png" alt="logo" className="w-12 h-12 p-1 ml-6" />
        <h1 className="font-bold text-3xl  bg-gradient-to-r from-[#fbb202] via-[#fc8402] to-[#fe460d] bg-clip-text text-transparent">
          RecipeLair
        </h1>
      </div>
      <form action="">
        <input
          type="text"
          name="search"
          placeholder="Enter Items"
          className="border rounded p-2  ml-8 lg:mr-5"
        />
      </form>
    </nav>
  );
}
