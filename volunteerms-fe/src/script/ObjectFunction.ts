/*
 * 判断对象是不是空对象
 * input: testObject: Object
 * output: boolean
 */
const isEmptyObject = (testObject: object) : boolean => JSON.stringify(testObject) === "{}";


export { isEmptyObject }
