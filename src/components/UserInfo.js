import DynamicList from "./DynamicList";

function Interests({ userInterests }) {
  return (
    <>
      <h4 className="titleHeading">Interests</h4>
      <DynamicList items={userInterests}></DynamicList>
    </>
  );
}

function UserEducation({ userEducation }) {
  return (
    <div>
      <h4 className="titleHeading">Education</h4>
      <DynamicList items={userEducation}></DynamicList>
    </div>
  );
}

function UserSkills({ userSkills }) {
  return (
    <div>
      <h4 className="titleHeading">Skills</h4>
      <DynamicList items={userSkills}></DynamicList>
    </div>
  );
}

export { Interests, UserEducation, UserSkills };
