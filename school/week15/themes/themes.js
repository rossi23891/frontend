function changeTheme() {
    switch (document.getElementById('theme').value) {
        case 'light':
            document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
            document.getElementsByTagName('body')[0].style.color = 'black';
            break;
        case 'blue':
            document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
            document.getElementsByTagName('body')[0].style.color = 'papayawhip';
            break;
        case 'dark':
            document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
            document.getElementsByTagName('body')[0].style.color = 'white';
            break;
    }
}