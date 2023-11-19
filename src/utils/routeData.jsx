import ActivePage from "../pages/actived";
import ClothesPage from "../pages/clothesPage";
import HomePage from "../pages/home";


const routeData = [
    {
        id:1,
        path:"/",
        companent:<HomePage/>
    },
    {
        id:2,
        path:"/женщинам",
        companent:<ClothesPage/>
    },
    {
        id:3,
        path:"/спорт", 
        companent:<ActivePage/>
    },
    {
        id:4,
        path:"/игры",
        companent:<ClothesPage/>
    },
    {
        id:5,
        path:"/электроника",
        companent:<ClothesPage/>
    },
    {
        id:6,
        path:"/кухни",
        companent:<ClothesPage/>
    }
]

export default routeData;