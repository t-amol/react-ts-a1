import React, { Suspense, useState } from "react";

import ListOfCourses from "./listofcourses/listofcourses";
// import Posts from "./posts/posts";
import GetPostById from "./getpostbyid/getpostbyid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/navbar";
import CourseDetails from "./coursedetails/coursedetails";
import NewCourse from "./newcourse/newcourse";
import GrandParent from "./contextapi/contextapi";
import { SignUpBootstrap4 } from "./forms/uniforms/signupbootstrap4";
import { SignUpAntd } from "./forms/uniforms/signupantd";
import { SignUpBootstrap5 } from "./forms/uniforms/signupbootstrap5";
import { SignUpMui } from "./forms/uniforms/signupmui";
import { SignUpSemantic } from "./forms/uniforms/signupsemantic";
import { SignUpUnstyled } from "./forms/uniforms/signupunstyled";
import { FormJsonform } from "./forms/jsonforms/formjsonform";
import { TableAgGrid } from "./tables/tableaggrid/tableaggrid";
import { useTranslation } from 'react-i18next';
import Translation from "./translation/translation";

const Posts = React.lazy(() => import("./posts/posts"));

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change language dynamically
  };

  return (
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={ListOfCourses}></Route>
        <Route path="/newcourse" Component={NewCourse}></Route>
        
        <Route path="/signupmui" Component={SignUpMui}></Route>
        <Route path="/formjsonform" Component={FormJsonform}></Route>
        <Route path="/tableaggrid" Component={TableAgGrid}></Route>
        <Route path="/coursedetails/:cid" Component={CourseDetails}></Route>
        <Route path="/contextapi" Component={GrandParent}></Route>
        <Route
          path="/posts"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Posts />
            </Suspense>
          }
        ></Route>
        <Route path="/getpostbyid" Component={GetPostById}></Route>
        <Route path="/translation" Component={Translation}></Route>

        <Route
          path="*"
          element={
            <>
              <h1>Page Not Found !</h1>
              <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// class App extends React.Component {
//   render() {
//     return <ListOfCourses />;
//   }
// }
// export default App;
