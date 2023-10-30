//Введіть бажану довжину масиву
const arrayLength = 2;

//Введіть число з якого розпочнеться масив
const startNumber = 1;
//---------
let arr1 = undefined;

    if (arrayLength >= 1){
        arr1 = new Array(arrayLength);
    }
    else{
        arr1 = 'Введіть довжину масиву більшу за 0'
    }  

    let i = startNumber;
    let j = 0;

do{
	arr1[j] = +i;
        i++;
	j++;
}while (j < arrayLength);

    console.table(arr1)
