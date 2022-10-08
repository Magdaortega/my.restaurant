import { Outlet } from "react-router-dom";
import { Banner } from "../../Banner/banner.component";

const Home = () => {
    return (
        <div>
            <Banner />
            <Outlet/>
        </div>
    )
}
export default Home;