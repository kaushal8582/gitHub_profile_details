

const form = document.querySelector("#form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let inputValue = document.querySelector("#form input").value
    sendRequest(inputValue)

})


function sendRequest(id){

    let requestUrl = `https://api.github.com/users/${id}`;

const Xhr = new XMLHttpRequest();
Xhr.open('GET', requestUrl);
Xhr.onreadystatechange = function () {
    console.log(Xhr.readyState);
    if (Xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(typeof data);
        console.log(data.login);
        let name = data.name;
        let user_name = data.login;
        let imgSrc = data.avatar_url;
        let email = data.email;
        let followers = data.followers
        let following = data.following;

        console.log("kaushal");
        createCard(name, user_name, imgSrc, email, followers, following);
        console.log("done");

    }
}
Xhr.open('GET', requestUrl);
Xhr.send();

}

// createCard();

function createCard(name, user_name, imgSrc, email, followers, following) {

    document.querySelector("#cardBox").innerHTML = "";


    let card = document.createElement("div")
    let img = document.createElement("img")
    // let imgDivCover = document.createElement("div")
    let userDetails = document.createElement("div")
    let userDetailsh1 = document.createElement("h1")
    let userDetailsh2 = document.createElement("h2")
    let userDetailsp = document.createElement("p")
    let followerBox = document.createElement("div")
    let followerBoxh2 = document.createElement("h2")
    let followerBoxSech2 = document.createElement("h2")
    let followerline = document.createElement("div")

    console.log("fun");

    card.id = "card";
    img.className = "img"
    userDetails.id = "user_details"
    userDetailsh1.id = "name"
    userDetailsh2.id = "user_name"
    userDetailsp.id = "email"

    // imgDivCover.className = "cover"

    followerBox.id = "followers_box"
    followerBoxh2.id = "followers"
    followerline.className = "line"
    followerBoxSech2.id = "following"


    img.setAttribute("src",`${imgSrc}`)
    userDetailsh1.innerText = name;
    userDetailsh2.innerText = user_name;
    
    console.log(email);
    
    if(email === null){
        userDetailsp.innerText = "Email is null "
    }else{
        userDetailsp.innerText = email;
    }
    

    followerBoxh2.innerHTML = `<h2 id = "followers"> ${followers} Followers <?h2>`
    followerBoxSech2.innerHTML = `<h2 id = "following"> ${following} Following <?h2>`


    document.querySelector("#cardBox").append(card);
    card.append(img);
    card.append(userDetails);
    card.append(followerBox);

    // imgDivCover.append(img)


    userDetails.append(userDetailsh1)
    userDetails.append(userDetailsh2)
    userDetails.append(userDetailsp)

    followerBox.append(followerBoxh2)
    followerBox.append(followerline)
    followerBox.append(followerBoxSech2)

    console.log("funend");
}

