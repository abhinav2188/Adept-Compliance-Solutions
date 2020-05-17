const changeActiveElements = (elementsArray,currentActiveElementsIndexArray,next,callback) => {
    var count = elementsArray.length;
    let newActiveElementsArray = [];
    var activeCount = currentActiveElementsIndexArray.length;
    currentActiveElementsIndexArray.map(a => {
        var i = next? a+activeCount: a-activeCount ;
        if(i<0) i=count+i;
        newActiveElementsArray.push(i%count);
    });
    let newActiveElements = [];
    newActiveElementsArray.map( i => newActiveElements.push(elementsArray[i]));
    callback(newActiveElementsArray,newActiveElements);
}

export {changeActiveElements};