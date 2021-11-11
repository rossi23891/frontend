class Cat {
    constructor(name, owner, ownerPhone, breed, feed, sex, comment, photo) {
        this.name = name;
        this.owner = owner;
        this.ownerPhone = ownerPhone;
        this.breed = breed;
        this.feed = feed;
        this.sex = sex;
        this.comment = comment;
        this.photo = photo;
    }
}

function createCat() {
    let name = document.getElementById('pet_name').value;
    let owner = document.getElementById('owner').value;
    let ownerPhone = document.getElementById('ownerphone').value;
    let breed = getBreed();
    let feed = getFeed();
    let sex = document.querySelector('.sex:checked').value;
    let comment = document.getElementById('comment').value;
    let photo = document.querySelector('.photo').files[0].name;
    let cat = new Cat(name, owner, ownerPhone, breed, feed, sex, comment, photo);
    console.log(cat);
    return cat;
}

function getBreed() {
    let breed = document.querySelector('.breed1').value;
    if (breed === 'Другая') {
        return document.querySelector('.breed2').value;
    }
    return breed;
}

function getFeed() {
    let feed = [];
    let feedOptions = document.querySelectorAll('.feed:checked');
    for (let feedOption of feedOptions) {
        feed.push(feedOption.value);
    }
    return feed;
}

function register(e) {
    e.preventDefault();
    fetch('localhost/test/post/cat', {
        method: 'POST',
        body: new FormData(ownerForm)
    })
        .then(response => response.json())
        .then(info => {
            console.log(info);
        })
        .catch(error => console.log(error));
}