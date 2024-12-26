import React, { Suspense } from "react";

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

const Posts = React.lazy(() => import("./posts/posts"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={ListOfCourses}></Route>
        <Route path="/newcourse" Component={NewCourse}></Route>
        
{/*         <Route path="/formUnstyled" Component={FormUnstyled}></Route>
        <Route path="/signupantd" Component={SignUpAntd}></Route>
        <Route path="/signupbootstrap4" Component={SignUpBootstrap4}></Route>
        <Route path="/signupbootstrap5" Component={SignUpBootstrap5}></Route> */}
        <Route path="/signupmui" Component={SignUpMui}></Route>
{/*         <Route path="/signupsemantic" Component={SignUpSemantic}></Route>
        <Route path="/signupunstyled" Component={SignUpUnstyled}></Route> */}

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
