import { useRoutes } from "react-router-dom";
import Basket from "./basket";
import Homepage from "./homepage";
import Layout from "./layout";

const ApiClient = () => {
    let routes = [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Homepage/>,
                },
                {
                    path: "/basket",
                    element: <Basket/>
                }
            ]
        }
    ];

    let element = useRoutes(routes);

    return (
        <div>
            {element}
        </div>
    )
}

export default ApiClient;