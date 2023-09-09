// import { Interests, UserEducation, UserSkills } from "./UserInfo";
import "./ResumePage.css";
import DynamicList from "./dynamicLists/DynamicList";
import PrintButton from "./printButtons/PrintButton";

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
          <DynamicList
            items={userInterestsArray}
            itemName={"Interests"}
            layout={"bullet"}
          ></DynamicList>

          <DynamicList
            items={[
              "Wilton High School",
              "Silvermine School of Arts",
              "Codeacademy",
            ]}
            itemName={"Education"}
            layout={"alpha"}
          ></DynamicList>

          <DynamicList
            items={["Web Design with HTML & CSS", "Mobile App Development"]}
            itemName={"Skills"}
          ></DynamicList>

          <DynamicList
            items={[
              "Student Technology Intern for Wilton School District",
              "Babysitter",
            ]}
            itemName={"Experience"}
          ></DynamicList>

          <DynamicList
            items={["Recycling Club", "Gardening Club", "Book Club"]}
            itemName={"Extracurriculars"}
          ></DynamicList>

          <PrintButton></PrintButton>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
