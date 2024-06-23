const skills = [
  {
    Frontend: ["JavaScript", "ReactJS", "NextJS", "CSS3"],
  },
  {
    Backend: ["NodeJS", "Express", "Prisma", "Postgresql"],
  },
];

document.getElementsByTagName("body")[0].onload = function () {
  loadSkills();
};

const renderItems = (skills) => {
  return skills.flatMap((skillSet) =>
    Object.values(skillSet).flat((skill) => `<p>${skill}</p><br />`),
  );
};

const loadSkills = () => {
  document.getElementById("skills").innerHTML = `${renderItems(skills)}`;
};
