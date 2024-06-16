// this is a test file
///////////////////////

const createCounter = (initialValue = 0) => {
    let counter = initialValue
    return (incrementalValue) => {
    counter += incrementalValue
    console.log(counter)
    }
}

const addToCounter = createCounter(10)
addToCounter(12)
addToCounter(1)
