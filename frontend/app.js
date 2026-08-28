/*const createProjectButton = document.getElementById("createProjectButton");

createProjectButton.addEventListener("click", function () {
  alert("Welcome to SkillForge!");
});
*/

const projects = [
  {
    title: "Build an e-commerce website",
    description: "I need a developer to build this online store",
    budget: 250000,
    category: "Web development",
    status: "Open",
  },
  {
    title: "Create a mobile application",
    description: "I need a mobile develper to work on this project",
    budget: 500000,
    category: "Mobile Development",
    status: "Open",
  },
  {
    title: "Design a Company logo",
    description: "I need a professional to design this company's logo",
    budget: 800000,
    category: "Graphics Design",
    status: "Open",
  },
];

console.log(projects);

for (const project of projects) {
  console.log(project.title);
}

function displayProject(project) {
  console.log("Project:", project.title);
  console.log("Budget:", project.budget);
  console.log("Category:", project.category);
}

displayProject(projects[0]);

const freelancers = [
  {
    name: "David",
    profession: "Full stack Developer",
    experience: 4,
    rating: 4.8,
  },

  {
    name: "Bayo",
    profession: "Web designer",
    experience: 4,
    rating: 4.5,
  },

  {
    name: "Bukky",
    profession: "Backend Developer",
    experience: 4,
    rating: 4.4,
  },
];

console.log(freelancers);

for (const freelance of freelancers) {
  console.log(freelance.name);
  console.log(freelance.profession);
  console.log(freelance.experience);
}

function displayFreelance(freelance) {
  console.log("Name:", freelance.name);
  console.log("Profession:", freelance.profession);
  console.log("Rating:", freelance.rating);
}

displayFreelance(freelancers[0]);

const freelancersName = freelancers.map(function (freelancer) {
  return `${freelancer.name} is a ${freelancer.profession}`;
});
console.log(freelancersName);

const freelancerSummaries = freelancers.map(function (freelancer) {
  return `${freelancer.name} - a ${freelancer.profession} - ${freelancer.rating}`;
});

console.log(freelancerSummaries);

const freelancerCards = freelancers.map(function (freelancer) {
  return {
    name: freelancer.name,
    profession: freelancer.profession,
    rating: freelancer.rating,
  };
});

console.log(freelancerCards);

const topFreelancers = freelancers.filter(function (freelancer) {
  return freelancer.rating >= 4.5;
});

console.log(topFreelancers);

const selectedFreelancer = freelancers.find(function (freelancer) {
  return freelancer.name === "Bayo";
});

console.log(selectedFreelancer);

const highRatedFreelancers = freelancers.filter(function (freelancer) {
  return freelancer.rating >= 4.5;
});

const highRatedNames = highRatedFreelancers.map(function (freelancer) {
  return freelancer.name;
});

console.log(highRatedFreelancers);
console.log(highRatedNames);


