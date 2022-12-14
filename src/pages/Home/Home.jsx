import React from "react";
import imgHome from "../../assets/img/conteudo.png";
import S from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className={S.inner}>
        <section className={S.section}>
          <div className={S.content}>
            <div>
              <h1 className={S.h1}>Jornada do cliente COD FIT</h1>
              <p className={S.p}>A free and fully responsive site template</p>
            </div>
            <p className={S.p}>
              Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
              aliquam facilisis ante interdum congue. Integer mollis, nisl amet
              convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
              magna finibus nisi nec lacinia. Nam maximus erat id euismod
              egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit
              nullam.
            </p>
            <Link to="/planos" className={S.btn}>
              Saber mais
            </Link>
          </div>
          <span className={S.image}>
            <img className={S.img} src={imgHome} alt="" />
          </span>
        </section>
      </div>
    </main>
  );
};

export default Home;
