import { useEffect, useState } from "react";
import "../../styles/App.css";
import Cookies from "js-cookie";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from "../Login/LoginForm";
import RegistrationForm from "../Registration/RegistrationForm";
import ProfileForm from "../Profile/ProfileForm";
import Articles from "../Articles/Articles";
import AuthorArticleList from "../Articles/AuthorArticleList";
import UserDetailView from "../Articles/UserDetailView";
import CreateArticle from "../Articles/CreateArticle";
import AdminArticleList from "../Articles/AdminArticleList";
import AdminReview from "../Articles/AdminReview";
import Layout from "./Layout";

const INITIAL_STATE = {
  auth: false,
  admin: false,
  authorID: 0,
  avatar: null,
};

function App() {
  const [superState, setSuperState] = useState(INITIAL_STATE);
  const [activeID, setActiveID] = useState(null);

  const newState = JSON.parse(window.localStorage.getItem("superState"));

  useEffect(() => {
    window.localStorage.setItem("superState", JSON.stringify(superState));
  }, [superState]);

  const handleError = (err) => {
    console.warn(err);
  };

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/dj-rest-auth/user/");
      if (!response.ok) {
        console.log("this", response.ok);
        setSuperState(INITIAL_STATE);
      } else {
        setSuperState(newState);
      }
    };
    checkAuth();
  }, []);

  const logoutUser = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    };

    const response = await fetch("/dj-rest-auth/logout/", options).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      Cookies.remove("Authorization");
      window.localStorage.removeItem("superState");
      setSuperState(INITIAL_STATE);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout superState={superState} setSuperState={setSuperState} logoutUser={logoutUser} />}
          >
            <Route index element={<Articles />} />
            <Route path="login" element={<LoginForm superState={superState} setSuperState={setSuperState} />} />
            <Route path="register" element={<RegistrationForm superState={superState} setSuperState={setSuperState} />} />
            <Route path="profile" element={<ProfileForm />} />
            {superState.auth && (
              <>
                <Route path="create" element={<CreateArticle />} />
                <Route path="article/:id/*" element={<UserDetailView />} />
                <Route path="articles/user/*" element={<AuthorArticleList />} />
                <Route path="articles/editor" element={<AdminArticleList />} />
                <Route path="articles/editor/:id/*" element={<AdminReview />} />
              </>
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;