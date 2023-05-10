const insert = () => {

    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': 
            appendText(label)
            break
        case 'button': 
            appendButton(label)
            break
        case 'textfield': 
            appendTextField(label)
            break
        case 'radio': 
            appendRadio(label)
            break
    }

}

const clearForm = () => {
    document.querySelector('#display').innerHTML = ''
}


const appendText = (label = "Default") => {
    

    let elem = document.createElement('div')
    elem.setAttribute('class', 'd-flex flex-row align-items-center')

    
    let input = document.createElement('input')
    input.setAttribute('placeholder', label)
    input.setAttribute('class', 'form-control mt-2')
    elem.append(input)

    let deleteButton = createDeleteButton(elem)
    elem.append(deleteButton)

    document.querySelector('#display').append(elem)

}

const appendButton = (label = "Default") => {

    let elem = document.createElement('div')
    elem.setAttribute('class', 'd-flex flex-row align-items-center')

    let button = document.createElement('button')
    button.setAttribute('class', 'btn btn-primary form-control mt-2')
    button.textContent = label
    elem.append(button)

    let deleteButton = createDeleteButton(elem)
    elem.append(deleteButton)

    document.querySelector('#display').append(elem)

}

const appendTextField = (label = "Default") => {

    let elem = document.createElement('div')
    elem.setAttribute('class', 'd-flex flex-row align-items-center')

    let textField = document.createElement('input')
    textField.setAttribute('class', 'form-control mt-2')
    textField.setAttribute('placeholder', label)
    elem.append(textField)

    let deleteButton = createDeleteButton(elem)
    elem.append(deleteButton)

    document.querySelector('#display').append(elem)

}

const appendRadio = (label = "Default") => {
    
    let elem = document.createElement('div')
    elem.setAttribute('class', 'd-flex flex-row align-items-center')

    let radioDiv = document.createElement('div')
    radioDiv.setAttribute('class', 'form-check mt-2')
    elem.append(radioDiv)

    let radio = document.createElement('input')
    radio.setAttribute('class', 'form-check-input')
    radio.setAttribute('type', 'radio')
    radio.setAttribute('name', 'radioGroup')
    radio.setAttribute('id', label)
    radio.setAttribute('value', label)
    radioDiv.append(radio)

    let radioLabel = document.createElement('label')
    radioLabel.setAttribute('class', 'form-check-label')
    radioLabel.setAttribute('for', label)
    radioLabel.textContent = label
    radioDiv.append(radioLabel)

    let deleteButton = createDeleteButton(elem)
    elem.append(deleteButton)

    document.querySelector('#display').append(elem)

}

const createDeleteButton = (elem) => {
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'btn btn-danger ms-2 mt-2 rounded-circle')
    deleteButton.textContent = 'X'
    deleteButton.onclick = () => {
        elem.remove()
    }
    return deleteButton
}





