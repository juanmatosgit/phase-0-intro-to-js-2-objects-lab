// Write your solution in this file!
const employee = {
    name : 'name',
    streetAddress : 'address'
}

function updateEmployeeWithKeyAndValue(object, key, value){
    const updatedEmployee = {...object};
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    const removeFromEmployee = {...object};
    delete removeFromEmployee[key];
    return removeFromEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}