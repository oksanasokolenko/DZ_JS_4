function checkAge(age) {
    if (age == undefined) {
        console.log('Введите возраст')
    } else {

        if (age >= 16) {
            console.log("Welcome")
        } else {
            console.log("вы еще молоды")
        }

    }
}
checkAge();