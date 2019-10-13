const isString = ele => {
  return ele === "" || typeof ele === "string";
}

const isNumber = ele => {
  return ele === 0 || typeof ele === "number"
}

const isFunction = ele => {
  return ele && typeof ele === "function"
}

const isArray = ele => {
  return ele && Array.isArray(ele) && ele instanceof Array
}

const isObject = ele => {
  return ele && typeof ele === 'object' && Array.isArray(ele) === false;
}

const handleArray = data => {
  return data.map(ele => {
    return cloneDeep(ele);
  });
}

const handleObject = data => {
  let newObject = {};
  for(let key in data) {
    newObject = {
      ...newObject,
      [key]: cloneDeep(data[key]),
    };
  }
  return newObject
};

// clone deep the array
cloneDeep = data => {
  if(isString(data)) return String(data);
  
  if(isNumber(data)) return Number(data);
  
  if(isFunction(data)) return data.bind({});
  
  if(isArray(data)){
    return handleArray(data);
  }
  
  if(isObject(data)){
    return handleObject(data);
  }
};



// Data Schema
let data = [
  {id: 20456, key: "secondKey"},
  {id: 456, key: "thirdKey"},
  {id: 4565, key: "firstKey"},
  {id: 46, key: "forthKey"},
  {id: 543, key: "secondKey"},
  {id: 54, key: "thirdKey"},
  {id: 5678, key: "firstKey"},
  {id: 567889, key: "firstKey"},
  {id: 3456, key: "secondKey"},
  {id: 543, key: "secondKey"},
  {id: 34234, key: "firstKey"},
  {id: 83792, key: "forthKey"},
  {id: 382938923, key: "secondKey"},
  {id: 348223, key: "secondKey"},
  {id: 34824, key: "secondKey"},
  {id: 3484892, key: "forthKey"},
  {id: 9489324, key: "firstKey"},
  {id: 3984934, key: "secondKey"},
  {id: 3483, key: "secondKey"},
  {id: 3948932, key: "forthKey"},
  {id: 348923, key: "secondKey"},
  {id: 4938, key: "firstKey"},
  {id: 343, key: "forthKey"},
  {id: 342239, key: "thirdKey"},
  {id: 432334, key: "secondKey"},
  {id: 483484843, key: "forthKey"},
  {id: 29832, key: "secondKey"},
  {id: 2893, key: "thirdKey"},
  {id: 2384, key: "forthKey"},
  {id: 282, key: "secondKey"},
];


// Key vales sequence for the desired output
const KEY_SEQUENCE = ["firstKey", "secondKey", "thirdKey", "forthKey"]; 

// takes two arguments
// first: dataset on which sorting to be performed
// second: keysSet on which basis sorting to be performed
// return four cases 
// first: if any if dataSet or keySet is not an array then returns null
// second: if dataset is empty then it returns null
// third: if keySet is empty then it returns dataset in first place as it is
// forth: if both dataset and keySets are available and are in object form then returns new sorted array
const getCampaignInvites = (dataArr = [], keySequence = []) => {
  if (isArray(dataArr) && isArray(keySequence)) {
    if(!dataArr.length) return null;
    if(data.length && !keySequence.length) return data;
    return dataArr.sort((first, second) => {
      const firstKeyIndex = keySequence.indexOf(first.key);
      const secondKeyIndex = keySequence.indexOf(second.key);
      return (firstKeyIndex > secondKeyIndex) ? 1
      : (firstKeyIndex === secondKeyIndex) ? 0
      : -1;
    });
  }
  return null;
};

let sortedData = getCampaignInvites(data, KEY_SEQUENCE);
console.log(sortedData);
