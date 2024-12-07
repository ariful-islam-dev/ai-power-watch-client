import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navbar/Navigation";
import { setPath } from "../assets/reducer/pathReducer";


const Orderpage = () => {
    document.title="Order Now | AI-Power Watch";
    // Update Storepath
    const dispatch = useDispatch();
    dispatch(setPath({current: "/order"}));
    
    const urlPath = useSelector(state=>state.path);
    console.log(urlPath);
    return (
        <div className="dark:bg-secondary bg-teal-50">
            <Navigation/>
            <h2 className='text-3xl'>Order page</h2>
        </div>
    );
};

export default Orderpage;