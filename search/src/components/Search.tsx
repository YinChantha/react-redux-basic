import { useState } from "react"
import { useDispatch } from "react-redux"
import { ThunkDispatch } from "redux-thunk";
import { fetchSingleListAction } from "../redux/action/listAction";

const Search = () => {
    // const dispatch = useDispatch()
    const dispatch: ThunkDispatch<any, any, any> = useDispatch();
    const [search, setSearch] = useState("")
    const handleSearch = (e:any) => {
        e.preventDefault();
        if (search === "") {
        return alert("Please provide a value");
        }
        dispatch(fetchSingleListAction(search));
    }
    return (
        <div className="bg-gray-500 p-10">
            <form className="flex items-center max-w-sm mx-auto" onSubmit={handleSearch}>   
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full p-3.5   dark:placeholder-gray-400  " placeholder="Search name..." required />
                </div>
                <button type="submit" className="p-4 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
        </div>
  )
}

export default Search