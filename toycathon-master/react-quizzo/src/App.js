import "./App.css";
import Footer from "./header-footer/footer";
import Header from "./header-footer/Headerslidepage";
import Jheader from "./joinwithcode/HeaderJoin";
import Lheader from "./login/Headerlogin";
import React from "react";
import Comp from "./joinwithcode/joinwithcode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Regform from "./register/Regform";
import Landingpage from "./carousel/landingpage";
import LogForm from "./login/LogForm";
import Progress from "./dashboard/Progress";
import Qheader from "./header-footer/Que_page_nav";
import Passchange from "./forgot_pass/Pass_change";
import Quespage from "./question_page/Que_page";
// import Ccard from "./cc_dashboard/Card";
// import Posts from "./cc_dashboard/post";
import Cdashhead from "./header-footer/cc_dash_nav";
import PublicQname from "./quiz_pop/Enter_q_name";
import Forpass from "./forgot_pass/Forgot_pass";
import Createq from "./Create_question/Create_que";
import Ccdash from "./cc_dashboard/cc_dash";
import Prof from "./Profilepage/proForm";
import QuizListPage from "./quiz_pop/Quiz";
import QuizPage from "./quiz_pop/singleQuizPage";
import EndQuiz from "./endQ/Quiz_end";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Landingpage></Landingpage>
            </>
          }
        ></Route>
        <Route
          path="/entercode"
          element={
            <>
              <Jheader />
              <Comp></Comp>
            </>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <>
              <Header />
              <Regform></Regform>
            </>
          }
        ></Route>
        <Route
          path="/Quiz"
          element={
            <>
              <Header />
              <QuizListPage />
            </>
          }
        ></Route>
        <Route
          path="/singleQuiz/:id"
          element={
            <>
              <Header />
              <QuizPage />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Lheader />
              <LogForm />
            </>
          }
        ></Route>
        {/* student dash */}
        <Route
          path="/prac"
          element={
            <>
              <Qheader />
              <Progress />
            </>
          }
        ></Route>
        <Route
          path="/prof/:id"
          element={
            <>
              <Qheader />
              <Prof />
            </>
          }
        ></Route>
        <Route
          path="/ques/:id"
          element={
            <>
              <Qheader />
              <Quespage />
            </>
          }
        ></Route>
        <Route
          path="/for_pass"
          element={
            <>
              <Header />
              <Forpass />
            </>
          }
        ></Route>

        <Route
          path="/pass_change"
          element={
            <>
              <Header />
              <Passchange />
            </>
          }
        ></Route>
        <Route
          path="/public_q"
          element={
            <>
              <Cdashhead />
              <PublicQname />
            </>
          }
        ></Route>
        <Route
          path="/create_q/:id"
          element={
            <>
              <Cdashhead />
              <Createq />
            </>
          }
        ></Route>
        {/* creator dash */}
        <Route
          path="/cc_dash"
          element={
            <>
              <Cdashhead />
              {/* <main className="bg-gray-100 h-full md:h-screen w-full">
              <section className="container mx-auto px-0 md:px-4 py-4">

                <div className="grid grid-cols-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
                  {Posts.map(() => (
                    <Ccard />
                  ))}
                </div>

              </section>
            </main> */}
              <Ccdash />
              
            </>
          }
        ></Route>
        <Route
                path="/end_q/:id/:total"
                element={
                  <>
                    <Qheader />
                    <EndQuiz />
                  </>
                }
              ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
