import Header from "../components/header/Header";
import { useEffect } from "react";
import Routers from "../routes/Routers";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
// navigate(-1) bir onceki sayfaya gider
// navigate("/welcome",{replace:true}) replace yapar
// navigate("/welcome") push yapar

const Layout = () => {
  const navigate = useNavigate();

  const data = localStorage.getItem("username");
  if (data == null || data.length < 5) {
    navigate("/login");
  }
  const isRender = data != null && data.length > 4;
  console.log(isRender);

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
