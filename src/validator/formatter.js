function trim() {
    let name = '  swetha    '
    console.log('Trimmed name is: ',name.trim())
}

function changetoLowerCase() {
    let name = 'SweTha'
    console.log('Name in lowercase is: ',name.toLowerCase())
}

function changeToUpperCase() {
    let name = 'swetha'
    console.log('Name in uppercase is: ',name.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase