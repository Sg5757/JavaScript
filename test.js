
// let - динамичиная переменная . const - статическая переменная
// let a 
// a = 145
// console.log(a)

// function a() {  // Создаем функцию
//     console.log("Hey bro") // Тело функции
// } // НЕ ЗАБЫВАЕМ О СИНТАКСИСЕ
// a()  //Вызываем функцию


const myCity = {
    city: "New York",
    popular: true,
    country: 'USA'
}
myCity.pop = true //Добавляем в переменную 
delete myCity.pop //Удаляем добавленную выше значение перменной
console.log(myCity) //Выводит все данные переснной
console.log(myCity.popular) // Выводим конкретную часть перемнной, Селениум ))))
myCity.country = 'Greenland'
console.log(myCity.country) //Мы меняем ссылку НА ОБЬЕКТ переменной 'const' (ВАЖНО)
