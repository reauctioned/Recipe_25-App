import SearchIcon from '@mui/icons-material/Search';
console.log(SearchIcon);



export default function NavBar() {
  return (
    <nav className="flex  top-0  w-[100%]  justify-between items-center py-4 bg-white drop-shadow-md  flex-col lg:flex-row gap-5 lg:gap-0">
      <div className="flex items-center gap-4"> 
    
        <img src="/public/logo.png" alt="logo" className="w-12 h-12 p-1 ml-2" />
        <h1 className="font-bold text-3xl mr-7 bg-gradient-to-r from-[#fbb202] via-[#fc8402] to-[#fe460d] bg-clip-text text-transparent">
          RecipeLair
        </h1>
      </div>
      <form >
        <SearchIcon sx={{ color: 'orange' }} />
        <input
          type="text"
          name="search"
          placeholder="Enter Items"
          className="ml-2 border border-orange-500 border-t-0 border-l-0 border-r-0 border-b-2 focus:outline-none p-2  ml-8 lg:mr-5"
        />
      </form>
    </nav>
  );
}
