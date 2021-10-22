let user_pic = document.getElementById('user_pic_input');
let user_name = document.getElementById('user_name');
user_name.addEventListener('change', changeHandler);
user_pic.addEventListener('change', changePic);
user_pic.addEventListener('change', setUserPic);


document.addEventListener("DOMContentLoaded", function (event) {
    let data = JSON.parse(localStorage.getItem('data'));
    if (data.user_pic != null) {
        document.getElementById('user_pic_input').src = data.user_pic.src;
    }

    if (data.user_name != null) {
        document.getElementById('user_name').value = data.user_name.value;
    }
})

function changeHandler(e) {
    let data = {
        user_pic: null,
        user_name: null
    };
    if (JSON.parse(localStorage.getItem('data')) != null) {
        data = JSON.parse(localStorage.getItem('data'));
    }
    data.user_name = user_name.value;
    localStorage.setItem('data', JSON.stringify(data));
}

function changePic(e) {
    let data = {
        user_pic: null,
        user_name: null
    };
    if (JSON.parse(localStorage.getItem('data')) != null) {
        data = JSON.parse(localStorage.getItem('data'));
    }
    data.user_pic = user_pic.src;
    localStorage.setItem('data', JSON.stringify(data));
}

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
    data.user_pic = user_pic;
    //index 1
    data.user_name = user_name;
    if (JSON.parse(localStorage.getItem('data')) == null) {
        localStorage.setItem('data', JSON.stringify(data));
    }
    createMessage(user_pic, user_name, inputString);
}

function createMessage(author, pic, inputString) {
    let userPart = author + " " + pic + ": ";
    document.getElementById(`cleanedAnswer`).innerHTML += userPart;
    document.getElementById(`cleanedAnswer`).innerHTML += clearSpam(inputString) + "<br/><br/>";
    document.getElementById(`userAnswer`).value = ``;
}

function clearSpam(inputString) {
    return inputString.replace(/xxx/ig, `***`).replace(/viagra/ig, `***`);
}