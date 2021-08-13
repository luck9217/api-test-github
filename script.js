const baseUrl= "https://api.github.com/"

const getPublicRepositories = async()=> {

    try {

        const response= await fetch(`${baseUrl}repositories`);
        const jsonResponse= await response.json();
        return jsonResponse[0];

    } catch(error){
        console.log(error);
    }
    
}

const getRepositoriesFromOwner=async (reposEndpoint)=>{

    const reposResponse=await fetch (reposEndpoint);
    const jsonReposResponse=await reposResponse.json();
    const responseRepos=jsonReposResponse.slice(0,5);
    return responseRepos ;


}


const editProfile =async()=>{

    const profileData= await getPublicRepositories();
    const avatarUrl= profileData.owner.avatar_url;
    const name=profileData.owner.login;
    const userRepos=await getRepositoriesFromOwner(profileData.owner.repos_url)

    const nameNode=document.querySelector("h1");
    const userAvatar=document.querySelector("#avatar")
    
    nameNode.textContent=name;
    userAvatar.src=avatarUrl

    userRepos.forEach( (repo)=>{

        const repoNode= document.createElement("a");
        const listNode=document.querySelector("#repos-list")
        repoNode.textContent=repo.html_url;
        repoNode.href=repo.html_url;

        listNode.appendChild(repoNode);

    });

};

editProfile();



