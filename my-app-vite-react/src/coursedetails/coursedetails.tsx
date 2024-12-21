import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseModel } from "../models/course.model";
import { Rating } from "../rating/rating";

const CourseDetails: React.FC = () => {
  const { cid } = useParams(); // hook
  const [theCourse, setTheCourse] = useState(
    new CourseModel(0, "", 0, 0, 0, "", ""),
  );
  useEffect(() => {
    axios
      .get("http://localhost:3500/courses/" + cid)
      .then(response => setTheCourse(response.data));
  }, []);
  return (
    <div>
      <header>
        <h1>Course Details for {cid}</h1>
      </header>
      <main>
        <div className="row">
          <div className="col-md-9">
            <img src={theCourse.imageUrl} alt={theCourse.title} width="100%" />
          </div>
          <div className="col-md-3">
            <h2>{theCourse.title}</h2>
            <Rating noofstars={theCourse.rating} />
            <p>
              <button className="btn btn-outline-primary">
                {theCourse.likes} <i className="fa-regular fa-thumbs-up"></i>
              </button>
            </p>
            <p>{theCourse.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
