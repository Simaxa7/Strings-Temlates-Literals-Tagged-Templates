//task1 Создать букву V таким образом как изображено
// #___________#
// _#_________#
// __#_______#
// ___#_____#
// ____#___#
// _____#_#
// ______#

function markV(lvl=7){
	const arr=[];
	for(let i = 0; i<lvl; i++){
		let newStr = ' '.repeat(i)+'#';
		
		if (i<lvl-1){
			newStr = newStr+' '.repeat((lvl-i-1)*2-1)+'#';
		}
		
		console.log(newStr)
		arr.push(newStr)
	}
	return (arr)
}

markV()


//task2 Создать тег-фунцию которая принимает строку состоящиую из кроткого названия валюты(usd/evro/bel) и переменную с номиналом(10/12,2/100)
// Например:    function convert(){...}
//              let haveMoney = 100;
//              convert `blr${haveMoney}`; 
// Должно вернуть ["blr-100.00\", "usd-48.193\\", "evro-44.150\\\"]
// Которая результатом выполнения возвращает массив строк: значением(для  округлить до 2х, остальные до 3х после запятой) ,
// названием валюты и добавит '\' к первому элементу (ко второму '\\' и тд) в конец
// использовать внутри функции как исходные данные, ну или актуальные на день решения
// let conversUSD = 2.0750;
// let conversEUR = 2.2650;


function convert(strings, ...values){
    const result = [];
    const conversUSD = 2.0750;
    const conversEUR = 2.2650;
    const v = +values[0];
    let totalBLR,totalUSD,totalEUR;
    let correct = true;

    if (strings[0]==='blr'){
        totalBLR = v;
        totalUSD = totalBLR/conversUSD;
        totalEUR = totalBLR/conversEUR;
    } else if (strings[0]==='usd') {
        totalUSD = v;
        totalBLR = totalUSD*conversUSD;
        totalEUR = totalBLR/conversEUR;
    } else if (strings[0]==='evro') {
        totalEUR = v;
        totalBLR = totalEUR*conversEUR;
        totalUSD = totalBLR/conversUSD;
    } else {
        correct = false;
        result.push(`Something is wrong, i can't exchange '${strings[0].toUpperCase()}'`)
    }

    if(correct){
        result.push(`blr-${(totalBLR).toFixed(2)}\\`);
        result.push(`usd-${(totalUSD).toFixed(3)}\\\\`);
        result.push(`evro-${(totalEUR).toFixed(3)}\\\\\\`);
    }

    return result
}

let haveMoney = '100';

console.log(convert `blr${haveMoney}`);
console.log(convert `usd${haveMoney}`);
console.log(convert `evro${haveMoney}`);
console.log(convert `lira${haveMoney}`); 


//task3 описание собрать картинку в правильном порядке
let str = `\ud83d\udc43\n\ud83d\udc44\n\ud83d\udc40`;

function func(str) {
	const arr = [...str];
	const newArr = [arr[4], arr[1], arr[0], arr[3], arr[2]]
    return newArr.join('')
}

console.log(func(str))


//task4 Вывести в консоль 'hello world!' пользоваться только юникод символами
console.log(`\u0048\u0065\u006c\u006c\u006f\u0020\u0077\u006f\u0072\u006c\u0064\u0021`);