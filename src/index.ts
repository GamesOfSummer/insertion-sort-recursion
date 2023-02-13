import { consoleBuffer, consoleEnd, consoleStart } from "./helpers";



function crudeSort(array: number[], n: number) {
    
    if(n === 0)
    {
        return array[n];
    }
    else if (array[n] < crudeSort(array, n - 1))
    {
        return array[n];
    }
    else
    {
        return crudeSort(array, n-1);
    }

}



function bubbleSort(array: number[]) {
    
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
        return [value].concat(bubbleSort(array));
    }
}




consoleStart();


console.log(crudeSort([6,3,2,0,13], 3));
console.log(crudeSort([36,110,42,2], 1));



console.log(bubbleSort([36,110,42,2]));
console.log(bubbleSort([36,11,44,22,44,99,11]));

consoleEnd();

consoleBuffer();

export {};
