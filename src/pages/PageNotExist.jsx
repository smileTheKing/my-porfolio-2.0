import { useNavigate, useNavigation } from "react-router-dom";

const PageNotExist = () => {
   const navigate =  useNavigate()
    return (
      <div className="w-full min-h-screen bg-inherit place-items-center grid place-content-center  text-white">
        <div className="h1 text-4xl">
        This Page does not exist
        </div>
        <button className="p-2 bg-red-500 my-4 rounded-md text-lg hover:opacity-75" onClick={()=>navigate('/')
        
        }>please return back.</button>
       
      </div>
    )
  }


  export default PageNotExist;