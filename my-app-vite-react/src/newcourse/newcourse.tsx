import { useForm } from "react-hook-form";

const NewCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <>
      <header>
        <h1> New Course</h1>
      </header>
      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleSubmit(formdata => {
            console.log(formdata);
          })}
        >
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="number"
                {...register("id", { required: "The course id is required !" })}
                placeholder="Course Id"
              />
            </div>
            {errors.id ? (
              <span style={{ color: "red" }}>
                {errors.id.message?.toString()}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="text"
                {...register("title", {
                  maxLength: {
                    value: 20,
                    message: "You exceeded 20 characters",
                  },
                })}
                placeholder="Course Title"
              />
            </div>
            {errors.title ? (
              <span style={{ color: "red" }}>
                {errors.title.message?.toString()}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="number"
                {...register("price")}
                placeholder="Course Price"
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="number"
                {...register("rating")}
                placeholder="Course Rating"
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="number"
                {...register("likes")}
                placeholder="Course Likes"
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="text"
                {...register("imageUrl")}
                placeholder="Course ImageUrl"
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <textarea
                rows={5}
                cols={20}
                {...register("description")}
                placeholder="Course Description"
              />
            </div>
          </div>

          <button className="btn btn-success m-1">Add New Course</button>
        </form>
      </div>
    </>
  );
};

export default NewCourse;
