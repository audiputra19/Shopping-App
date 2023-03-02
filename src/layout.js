import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose, faBars} from '@fortawesome/free-solid-svg-icons'
import { Outlet, useNavigate } from "react-router-dom"
import './App.css';
import { useEffect, useRef } from "react";


const Layout = () => {
    const navigate = useNavigate();

    const ref = useRef(null);
    const handleClick = () => {
        ref.current.focus();
    };

    useEffect(() => {
        let btnSearch = document.querySelector('.btnSearch');
        let closeSearch = document.querySelector('.closeSearch');
        let searchBox = document.querySelector('.searchBox');
        let header = document.querySelector('.header');
        let home = document.querySelector('.home');
        let basket = document.querySelector('.basket');
        let menuToggle = document.querySelector('.menuToggle');

        btnSearch.onclick = function(){
            searchBox.classList.add('active');
            closeSearch.classList.add('active');
            btnSearch.classList.add('active');
            menuToggle.classList.add('hide');
            header.classList.remove('open');
        }

        closeSearch.onclick = function(){
            searchBox.classList.remove('active');
            closeSearch.classList.remove('active');
            btnSearch.classList.remove('active');
            menuToggle.classList.remove('hide')
        }

        menuToggle.onclick = function(){
            header.classList.toggle('open');
            searchBox.classList.remove('active');
            closeSearch.classList.remove('active');
            btnSearch.classList.remove('active');
        }

        home.onclick = function(){
            header.classList.remove('open');
        }
        
        basket.onclick = function(){
            header.classList.remove('open');
        }
    });
        
    return (
        <div className="body">
            <div className="header">
                <button className="rounded-lg text-gray-800 text-2xl font-bold uppercase tracking-widest" onClick={() => { navigate('/')}}>Shopping</button>
                <div className="group">
                    <ul className="navigation">
                        <li className="home" onClick={() => { navigate('/') }}>Home</li>
                        <li className="basket" onClick={() => { navigate('/basket') }}>Basket</li>
                    </ul>
                    <div className="search">
                        <span className="icon">
                            <FontAwesomeIcon className="btnSearch" onClick={handleClick} icon={faSearch}/>
                            <FontAwesomeIcon className="closeSearch" icon={faClose}/>
                        </span>
                    </div>
                    <FontAwesomeIcon className="menuToggle" icon={faBars}/>
                </div>
                <div className="searchBox">
                    <input ref={ref} type="text" placeholder="Search here..."/>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;