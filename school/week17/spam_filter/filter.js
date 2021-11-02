let user_pic = document.getElementById('user_pic_input');
let user_name = document.getElementById('user_name');
user_pic.addEventListener('change', setUserPic);

document.addEventListener("DOMContentLoaded", function (event) {
    let data = JSON.parse(localStorage.getItem('data'));
    if (data != null) {
        document.getElementById('user_photo').src = data.user_pic;
        document.getElementById('user_name').value = data.user_name;
    }

    let html = localStorage.getItem('html');
    if (html != null) {
        document.getElementById('cleanedAnswer').innerHTML = html;
    }
});

function setUserPic(e) {
    document.getElementById('user_photo').src = window.URL.createObjectURL(this.files[0]);
}

function submitAnswer() {
    let inputString = document.getElementById(`userAnswer`).value;
    let user_pic = document.getElementById('user_pic_input');
    let user_name = document.getElementById('user_name');

    let data = {
        user_pic: null,
        user_name: null
    };
    // index 0
    data.user_pic = user_pic.files[0].name;
    //index 1
    data.user_name = user_name.value;
    localStorage.setItem('data', JSON.stringify(data));
    createMessage(data.user_pic, data.user_name, inputString);
}

function createMessage(pic, author, inputString) {
    let userPart = author + '<img width="100" height="100" src="' + pic + '"> : ';
    document.getElementById(`cleanedAnswer`).innerHTML += userPart;
    document.getElementById(`cleanedAnswer`).innerHTML += clearSpam(inputString) + "<br/><br/>";
    document.getElementById(`userAnswer`).value = ``;

    localStorage.setItem('html', document.getElementById('cleanedAnswer').innerHTML);
}

function clearSpam(inputString) {
    return inputString.replace(/xxx|viagra/ig, `***`);
}