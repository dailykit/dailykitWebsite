import React from "react";
import "./../style.css";
import ImageBox from "./ImageBox";
const BlogSection = (props) => {
  return (
    <>
      {console.log(props.blogs)}
      {!props.blogs ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h3 className="Blog_heading">{props.blogs_heading}</h3>
          <div className="container">
            <div className="row">
              {props.blogs.map((rest) => {
                return <ImageBox rest={rest} key={rest.id} />;
              })}{" "}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BlogSection;
