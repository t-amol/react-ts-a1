import React, { Suspense } from "react";

import ListOfCourses from "./listofcourses/listofcourses";
// import Posts from "./posts/posts";
import GetPostById from "./getpostbyid/getpostbyid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/navbar";
import CourseDetails from "./coursedetails/coursedetails";
import NewCourse from "./newcourse/newcourse";
import GrandParent from "./contextapi/contextapi";
const Posts = React.lazy(() => import("./posts/posts"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={ListOfCourses}></Route>
        <Route path="/newcourse" Component={NewCourse}></Route>
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
