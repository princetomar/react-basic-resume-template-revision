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

export { Interests, UserEducation };
