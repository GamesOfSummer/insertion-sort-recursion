import { consoleBuffer, consoleEnd, consoleStart } from "./helpers";



function crudeInsertionSort(array: number[]) {
    
    for(let i = 0; i < array.length -1; i++)
    {
        if(array[i] > array[i + 1])
        {
            const greaterValue = array[i];
            const lesserValue = array[i + 1];
           
            array[i] = lesserValue;
            array[i + 1] = greaterValue;
        }
    }

    return array;

}



function recursionInsertionSort(array: number[]) {
    
    if(array.length < 1)
    {
        return array;
    }
    else 
    {

        for(let i = 0; i < array.length; i++)
        {
            if ((array[i] < array[i + 1]))
            {
                const lesserValue = array[i];
                const greaterValue = array[i + 1];
               
                array[i] = greaterValue;
                array[i + 1] = lesserValue;
            }
        }

        const value = array.pop();
        return [value].concat(recursionInsertionSort(array));
    }
}


consoleStart();

console.log(crudeInsertionSort([6,3,2,0,13]));
console.log(crudeInsertionSort([36,110,42,2]));

// console.log(recursionInsertionSort([36,11,44,22,44,99,11]));

consoleEnd();
consoleBuffer();

export {};
