import {Link} from 'react-router-dom'


export default function Navbar(){
    return(
        <div>
        <nav className="navbar flex bg-red-500 h-[15vh] md:h-[20vh]  px-7 items-center md:px-10 lg:px-20 justify-between">
            <Link className="logo h-auto" to="/">
                <img src="/public/Logo.png" alt="Robo Knot" className="w-[100px] md:w-[155px]  h-auto rounded-2xl"/>
            </Link>
            <ul className="right-nav md:flex gap-x-10">
                <li className="nav-item text-2xl animate-pulse hidden md:flex">
                 <Link to="/">Home</Link>   
                </li>

                <li className="nav-item text-2xl hidden md:flex">
                    <Link to="/about">About Us</Link>
                </li>

                <li className = "nav-item text-2xl hidden md:flex">
                    <Link to="/blog">Blog</Link>
                </li>

                
            <li className = "nav-item text-2xl hidden md:flex">
                    <Link to="">
                        <i className = "fab fa-facebook text-[#1877F2]"></i>
                    </Link>
                </li>

                <li className = "nav-item text-2xl hidden md:flex">
                    <Link to="">
                        <i className="fab fa-instagram bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-transparent bg-clip-text"></i>
                    </Link>
                </li>

                <li className = "nav-item text-2xl hidden md:flex">
                    <Link to="">
                        <i className= "fab fa-x-twitter text-black"></i>
                    </Link>
                </li> 

                <li className = "nav-item flex sm:flex md:hidden lg:hidden text-xl">
                    <Link to="">
                        <i className="fa-solid fa-bars bg-gradient-to-r from-orange-400 via-pink-300 text-transparent bg-clip-text"></i>
                         <i className="fa-solid fa-xmark bg-gradient-to-r from-red-400 via-green-500 text-transparent bg-clip-text"></i>
                    </Link>    
                
                </li>  

            
            </ul>

        </nav>

        {/* A Straight Line */}
        <div className="line mt-1 ml-1 mr-1 md:mt-2 md:ml-12 md:mr-12"></div>
    </div>
    )
    
}