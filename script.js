const fs = require('fs');
const fileName = process.argv[2];
// BUBBLE SORT -----------------------------------------------------
function bubble(){
  fs.readFile(fileName, 'utf8', (error, data) => {
      if (error) {
          console.error(error.message);
          return ;
      }
      const arrayFile = data.split(" ").map((x) => Number.parseInt(x));
    bubbleSort(arrayFile);
  });

  const alreadySorted = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
      return true;
    }
  };

  const bubbleSort = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        count += 1;
        if (arr[j] < arr[j - 1]) swapBubble(arr, j);
      }
      if (alreadySorted(arr)) return console.log(`tri à bulle: ${count} comparaisons - [${arr}]`);
    }
    console.log(`tri à bulle: ${count} comparaisons - [${arr}]`);
  };

  const swapBubble = (data, x) => {
    let temp = data[x];
    data[x] = data[x - 1];
    data[x - 1] = temp;
  }
};
bubble();

// INSERTION SORT ----------------------------------------------------------------
function insertion(){
  fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    const arrayFile = data.split(" ").map((x) => Number.parseInt(x));
  insertSort(arrayFile);
});
  const insertSort = (arr) => {
    let count = 0;
    for(let i = 1; i < arr.length; i++) {
      let current = arr[i]
      let j = i - 1;
      while (j > - 1 && arr[j] > current) {
        count += 1;
        arr[j + 1] = arr[j];
        j--;
      }
    arr[j + 1] = current;
    }
    console.log(`tri par insertion: ${count} comparaisons - [${arr}]`);

  };

};
insertion();

// SELECTION SORT ----------------------------------------------------------------
function selection() {
  fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    const arrayFile = data.split(" ").map((x) => Number.parseInt(x));
  selectionSort(arrayFile);
});
  const selectionSort = (arr) => {
    let len = arr.length;
    let count = 0;
        
    for(let i = 0; i < len; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < len; j++){
          count += 1;
            if(arr[j] < arr[min]) {
                min=j; 
            }
        }
        if (min != i) {
             // Swapping the elements
            let temp = arr[i]; 
            arr[i] = arr[min];
            arr[min] = temp;      
        }
    }
    console.log(`tri par sélection: ${count} comparaisons - [${arr}]`);
    return arr;
  }
};
selection();

// QUICK SORT -----------------------------------------------------------
function quick(){
  let count = 0;
  fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    const arrayFile = data.split(" ").map((x) => Number.parseInt(x));
  quickSort(arrayFile)
  console.log(`tri rapide: ${count} comparaisons - [${arrayFile}]`);
  });
  const partition = (arr, indexBegin, indexFinish) => {
    const pivotValue = arr[indexBegin]
    let swapIndex = indexBegin
    for (let i = indexBegin + 1; i <= indexFinish; i++) {
      count += 1;
      if (pivotValue > arr[i]) {
        swapIndex++
        if (i !== swapIndex) {
          // SWAP
          [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
        }
      }
    }
    if (swapIndex !== indexBegin) {
      // Swap pivot into correct place
      [arr[swapIndex], arr[indexBegin]] = [arr[indexBegin], arr[swapIndex]]
    }
    return swapIndex
  }

  const quickSort = (arr, indexBegin = 0, indexFinish = arr.length - 1) => {
      if (indexBegin < indexFinish) {
      let pivotIndex = partition(arr, indexBegin, indexFinish)
      quickSort(arr, indexBegin, pivotIndex - 1)
      quickSort(arr, pivotIndex + 1, indexFinish)
    return arr;
    }
    return;
  };
};
quick();