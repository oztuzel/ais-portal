import Header from "../components/header/Header";
import Routers from "../routes/Routers";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const data = localStorage.getItem("username");
  if (data == null || data.length < 5) {
    navigate("/login");
  }
  const isRender = data != null && data.length > 4;

  return (
    <div>
      {isRender && <Header />}
      <main>
        <Routers />
      </main>
    </div>
  );
};
export default Layout;
