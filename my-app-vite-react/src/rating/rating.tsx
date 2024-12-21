type RatingProps = {
  noofstars: number;
};

// export function Rating(props: RatingProps) {
//   var ratings = [];

//   for (let index = 0; index < props.noofstars; index++) {
//     ratings.push(
//       <i
//         className="fa-solid fa-star"
//         key={index}
//         style={{ color: "orange" }}
//       ></i>,
//     );
//   }

//   return <>{ratings}</>;
// }

// The Typescript way
export const Rating: React.FC<RatingProps> = (props: RatingProps) => {
  var ratings = [];
  for (let index = 0; index < props.noofstars; index++) {
    ratings.push(
      <i
        className="fa-solid fa-star"
        key={index}
        style={{ color: "orange" }}
      ></i>,
    );
  }
  return <>{ratings}</>;
};
