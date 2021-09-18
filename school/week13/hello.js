function hello() {
    let name = prompt("Как тебя зовут?", "world");
    alert(`Hello, ${name}!`);
}

let sayHi = () => alert(`Привет, ${prompt("Как тебя зовут?", "world")}`);