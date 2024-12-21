import { useState } from "react";
import { CourseModel } from "../models/course.model";
import { Rating } from "../rating/rating";
import { Link } from "react-router-dom";

type CourseProps = {
  coursedetails: CourseModel;
};
const Course: React.FC<CourseProps> = (props: CourseProps) => {
  let [currLikes, setCurrLikes] = useState<number>(props.coursedetails.likes);
  return (
    <div className="col-md-3">
      <div className="card m-2 p-2 shadow rounded-0">
        <Link to={`/coursedetails/${props.coursedetails.id}`}>
          <img
            src={props.coursedetails.imageUrl}
            className="card-img-top"
            alt="..."
            width="150px"
            height="150px"
          />
        </Link>

        <div className="card-body">
          <h5 className="card-title">{props.coursedetails.title}</h5>
          <p className="cart-text">
            <Rating noofstars={props.coursedetails.rating} />
          </p>
          <p className="card-text">₹. {props.coursedetails.price}</p>
          <button
            className="btn btn-outline-primary"
            onClick={() => setCurrLikes(currLikes + 1)}
          >
            {currLikes} <i className="fa-regular fa-thumbs-up"></i>
          </button>

          <button className="btn btn-danger mx-2">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;

// type CourseProps = {
//   coursedetails: CourseModel;
//   DeleteACourse: (courseId: number) => void;
// };

// export default class Course extends Component<CourseProps> {
//   state = { currLikes: this.props.coursedetails.likes };
//   IncrementLikes() {
//     console.log("Within IncrementLikes !");
//     // console.log(this.props.coursedetails.likes++); // props are readonly
//     //this.state.currLikes++; // state is immutable
//     this.setState({ currLikes: this.state.currLikes + 1 });
//   }

//   render() {
//     console.log("Course - Within Render !");

//     return (
// <div className="col-md-3">
//   <div className="card m-2 p-2 shadow rounded-0">
//     <img
//       src={this.props.coursedetails.imageUrl}
//       className="card-img-top"
//       alt="..."
//       width="150px"
//       height="150px"
//     />
//     <div className="card-body">
//       <h5 className="card-title">{this.props.coursedetails.title}</h5>
//       <p className="cart-text">
//         <Rating noofstars={this.props.coursedetails.rating} />
//       </p>
//       <p className="card-text">₹. {this.props.coursedetails.price}</p>
//       <button
//         className="btn btn-outline-primary"
//         onClick={() => this.IncrementLikes()}
//       >
//         {this.state.currLikes}
//         {/* {this.props.coursedetails.likes}{" "} */}
//         <i className="fa-regular fa-thumbs-up"></i>
//       </button>

//       <button
//         className="btn btn-danger mx-2"
//         onClick={() =>
//           this.props.DeleteACourse(this.props.coursedetails.id)
//         }
//       >
//         <i className="fa-solid fa-trash"></i>
//       </button>
//     </div>
//   </div>
// </div>
//     );
//   }
// }
