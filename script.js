const baseUrl = "https://api.github.com/";
const firstTime = 1;

const getPublicRepositories = async () => {
  try {
    const response = await fetch(`${baseUrl}repositories`);
    const jsonResponse = await response.json();
    const randomProfile= getRandomArbitrary(jsonResponse);
    return randomProfile;
  } catch (error) {
    console.log(error);
  }
};

const getRepositoriesFromOwner = async (reposEndpoint) => {
  const reposResponse = await fetch(reposEndpoint);
  const jsonReposResponse = await reposResponse.json();
  const responseRepos = jsonReposResponse.slice(0, 5);
  return responseRepos;
};

const editProfile = async () => {
  const profileData = await getPublicRepositories();
  const avatarUrl = profileData.owner.avatar_url;
  const name = profileData.owner.login;
  const userRepos = await getRepositoriesFromOwner(profileData.owner.repos_url);

  

  const nameNode = document.querySelector("h1");
  const userAvatar = document.querySelector("#avatar");
  const listNode = document.querySelector("#repos-list");

  nameNode.textContent = name;
  userAvatar.src = avatarUrl;
  listNode.innerHTML="";

  userRepos.forEach((repo) => {
    const repoNode = document.createElement("a");
    repoNode.textContent = repo.html_url;
    repoNode.href = repo.html_url;

    
    listNode.appendChild(repoNode);
  });
};

const avatarOnMove = (event) => {
  if (event.type === "mouseenter") {
    avatarSelected.classList.toggle("blur");
  } else {
    avatarSelected.className = "Redonda";
  }
};

function getRandomArbitrary(profileList) {
  const randomIndex= Math.ceil(Math.random() * profileList.length-1);
  const randomProfile=profileList[randomIndex];
  return randomProfile;
}

const avatarSelected = document.querySelector(`#avatar`);
avatarSelected.addEventListener("mouseenter", avatarOnMove);
avatarSelected.addEventListener("mouseleave", avatarOnMove);

editProfile();

const BtnSelected = document.querySelector(`#shuffle`);
BtnSelected.addEventListener("click", editProfile);
