document.addEventListener("DOMContentLoaded",
    function (event) {
        getUserInfo();
        getProjects();
        getFollowers();
    });

function getUserInfo() {
    fetch("https://api.github.com/users/rossi23891")
        .then(response => response.json())
        .then(user => {
            document.getElementById("userPhoto").src = user.avatar_url;
            document.getElementById("userName").innerText = user.login;
        })
        .catch(error => console.log(error));
}

function getProjects() {
    fetch("https://api.github.com/users/rossi23891/repos")
        .then(response => response.json())
        .then(list => {
            let projects = getProjectsList(list);
            document.getElementById("projects").innerText = projects.join(", ");
        })
        .catch(error => console.log(error));
}

function getFollowers() {
    fetch("https://api.github.com/users/rossi23891/followers")
        .then(response => response.json())
        .then(followers => {
            let logins = getFollowersLogins(followers);
            document.getElementById("followers").innerText = logins.join(", ");
        })
        .catch(error => console.log(error));
}

function getFollowersLogins(followers) {
    let names = [];
    for (let index = 0; index < followers.length; index++) {
        let login = followers[index].login;
        names.push(login);
    }
    return names;
}

function getProjectsList(list) {
    let projects = [];
    for (let index = 0; index < list.length; index++) {
        let project = list[index].name;
        projects.push(project);
    }
    return projects;
}