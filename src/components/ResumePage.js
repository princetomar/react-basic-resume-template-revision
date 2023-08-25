import { Interests, UserEducation, UserSkills } from "./UserInfo";
import "./ResumePage.css";

function ResumePage({ personName }) {
  const userInterestsArray = [
    "Drawing",
    "Photography",
    "Design",
    "Programming",
    "Computer Science",
  ];

  return (
    <div>
      <div className="resumeContainer">
        <br></br>
        <h1>Resume</h1>
        <h2>{personName}</h2>
        <hr></hr>
        <br></br>

        <div>
          <Interests userInterests={userInterestsArray}></Interests>
          <UserSkills userSkills={["Web Design with HTML & CSS"]}></UserSkills>

          <UserEducation
            userEducation={[
              "Wilton High School",
              "Silvermine School of Arts",
              "Codeacademy",
            ]}
          ></UserEducation>

          <h4 className="titleHeading">Experience</h4>
          <ul>
            <li>Student Technology Intern for Wilton School District</li>
            <li>Babysitter</li>
          </ul>

          <h4 className="titleHeading">Extracurriculars</h4>
          <ul>
            <li>Recycling Club</li>
            <li>Gardening Club</li>
            <li>Book Club</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
