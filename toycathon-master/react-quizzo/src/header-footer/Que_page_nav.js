import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./que_nav.css";
import DjangoReactCsrftoken from "django-react-csrftoken";

function Que_page() {
  return (
    <>
      <nav>
        <div className="icon"><Link to={''}>LOGO</Link></div>
        <ol>
          <li>
           <Link to={'/prac'} className="view_q">
              {" "}
              Practice{" "}
            </Link>
          </li>
          <li>
           <Link to={'/entercode'} className="enter_c">
              {" "}
              Enter Code{" "}
            </Link>
          </li>
        </ol>
        <div class="dropdown">
          <button class="dropbtn">
            <img
              className="profile_img"
              src="https://pixlok.com/wp-content/uploads/2021/02/profile-Icon-SVG.jpg"
              alt=""
              />
          </button>
          <div class="dropdown-content">
          <form action="/gotoProfile/" method="POST">
            <DjangoReactCsrftoken/>
            <button  type="submit">Profile </button>
          </form>
          <Link to={''}>Leaderboard</Link>
          <form action="/logout/" method="POST">
            <DjangoReactCsrftoken/>
            <button  type="submit">Logout </button>
          </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Que_page;
