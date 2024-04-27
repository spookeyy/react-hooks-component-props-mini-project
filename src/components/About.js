import React from "react";

const About = ({
  image = "https://via.placeholder.com/215Links to an external site.",
  about,
}) => {
  return (
    <aside>
      <img src={image} alt="blog logo"></img>
      <p>{about}</p>
    </aside>
  );
};

export default About;
