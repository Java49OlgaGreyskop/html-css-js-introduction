

const inputElements = document.querySelectorAll(".form-class [name]");
const errorElement = document.querySelector(".error");

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee);
}

function onChange(event) {
    if (event.target.name == "salary") {
        if (+event.target.value < 10000 || +event.target.value > 40000) {
            event.target.value = errorMessage(event);
            event.target.value = '';
        }
    }
    if (event.target.name == "birthDate") {
        bithDateCheck(event);
    }
}

function bithDateCheck(event) {
    const date = (event.target.value).split('-');
    const checkYear = +date[0];
    if (checkYear < 1950 || checkYear > 2002) {
        event.target.value = errorMessage(event);
    }
}

function errorMessage(event) {
    event.target.value = '';
    errorElement.innerHTML = 'invalid value entered';
    timer = setTimeout(() => {
        errorElement.innerHTML = '';
    }, 5000);
}