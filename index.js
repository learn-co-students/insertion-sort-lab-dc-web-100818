function findMinAndRemove(array){
  let min = array[0]
  let index = 0

  for(let i = 1; i < array.length; i++){
    if(array[i] < min){
      min = array[i]
      index = i
    }
  }
  array.splice(index, 1)
  return min
}

function insertionSort(array){
  let sorted = []
  let i = 0

  while(i < array.length){
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
