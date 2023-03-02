import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './homepage.css';
import { saveData } from "./redux/shopping/shopping.action";
import { useDispatch } from "react-redux";

const Homepage = () => {
    const dispatch = useDispatch();

    const data = [
        {
            id: 1,
            img: "https://polytron.co.id/wp-content/uploads/2022/05/MicrosoftTeams-image-56-scaled.jpg",
            title: "TV polytron 32 inc Google TV New Model 2023",
            price: 3200000,
            rate: "5.0"
        },
        {
            id: 2,
            img: "a",
            title: "b",
            price: "c",
            rate: "d"
        },
        {
            id: 3,
            img: "e",
            title: "f",
            price: "g",
            rate: "h"
        },
        {
            id: 4,
            img: "i",
            title: "j",
            price: "k",
            rate: "l"
        } 
    ]

    const basket = (get) => {
        dispatch(saveData({
            id: get.id,
            img: get.img,
            title: get.title,
            price: get.price,
            rate: get.rate,
            transactionDate: new Date().toLocaleString("id-ID"),
        }));
    }

    return (
        <div className="wrapper m-3 p-5 flex gap-4">
            {
                data.map((info, index) => { 
                    return(   
                        <div className="card p-5" key={index}>
                            <img className="image" src={info.img} alt="Girl in a jacket" width="150" height="200"/>    
                            <div className="text-xl text-gray-700 pt-4">
                                <label className="title" value={info.title}>{info.title}</label>
                            </div>
                            <div className="text-xl text-gray-700 font-bold pt-2">
                                <label className="price" value={info.price}>Rp. {info.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</label>
                            </div>
                            <div className="card-detail pt-2 flex">
                                <div>
                                    <FontAwesomeIcon className="text-yellow-400 pr-2 text-xl" icon={faStar}/>
                                    <label className="rate text-gray-700" value={info.rate}>{info.rate}</label>
                                </div>
                                <FontAwesomeIcon className="text-gray-400 text-xl" onClick={() => basket(info)} icon={faCartShopping}/>
                            </div>
                            <div className="pt-4">
                                <button className="bg-sky-900 hover:bg-sky-700 p-2 text-xl font-bold text-white w-full rounded-lg">Cek</button>
                            </div>
                        </div>
                    )
                })    
            }
        </div>
    )
}

export default Homepage;