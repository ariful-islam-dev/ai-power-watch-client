import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../components/Navbar/Navigation';
import { setPath } from '../assets/reducer/pathReducer';

const HomePage = () => {
    document.title = "AI-Power Watch | Home";
    // Update Storepath
    const dispatch = useDispatch();
    dispatch(setPath({current:"/"}));
    
    const urlPath = useSelector(state=>state.path);
    console.log(urlPath);
    return (
        <div className="dark:bg-secondary bg-teal-50">
            <Navigation/>
            <div className="container mx-auto">
                <h2 className='text-3xl'>This is Home Page</h2>
            </div>
        </div>
    );
};

export default HomePage;