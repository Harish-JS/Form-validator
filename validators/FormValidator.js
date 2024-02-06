window.removeError = (element) => {
    element.classList.remove('error');
    element.classList.add('success');

    const nextElement = element.nextElementSibling;
    if (nextElement && nextElement.classList.contains('error_message')) { 
        element.parentNode.removeChild(nextElement);
    }

    const newElement = document.createElement('p');
    newElement.classList.add('success_message');
    newElement.textContent = 'Looks good!';

    if (element.parentNode.contains(nextElement)) {
        if (nextElement && nextElement.classList.contains('success_message')) {
            element.parentNode.replaceChild(newElement, nextElement);
        } else {
            element.parentNode.insertBefore(newElement, nextElement);
        }
    } else {
        element.parentNode.appendChild(newElement);
    }
}

window.setError = (element,message) => { 
    element.classList.remove('success')
    element.classList.add('error')
    const nextElement = element.nextElementSibling;
    if (nextElement && nextElement.classList.contains('success_message')) { 
        element.parentNode.removeChild(nextElement)
    }
    const errorElement = document.createElement('p')
    errorElement.classList.add('error_message');
    errorElement.textContent = message
    if (element.parentNode.contains(nextElement)) {
        if (nextElement && nextElement.classList.contains('error_message')) {
            element.parentNode.replaceChild(errorElement,nextElement)
        } else {
            element.parentNode.insertBefore(errorElement,nextElement)
        }
    }
    else {
        element.parentNode.appendChild(errorElement)
    }
}

window

window.validateName = () => {
    const nameElement = document.getElementById('name')
    const name = nameElement.value;
    const nameRegex = /^[A-Za-z ]+$/;
    if (name.length < 4 || name.length > 32 || !nameRegex.test(name)) {
        setError(nameElement, 'Invalid name')
        return false
    }
    else {
        removeError(nameElement)
        return true
    }
}


window.validateEmail = () => { 
    const emailElement = document.getElementById('email')
    const email = emailElement.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
    if (email==="" || !emailRegex.test(email)) { 
        setError(emailElement, 'Enter valid email')
        return false 
    } else {
        removeError(emailElement)
        return true
    }
}

window.validateContact = () => {
    const contactElement = document.getElementById('contact')
    const contact = contactElement.value;
    const contactRegex = /^[6789]\d{9}$/;
    if (contact.length < 10 || !contactRegex.test(contact)) {
        setError(contactElement, 'Contact number is invalid')
        return false
    }
    else {
        removeError(contactElement)
        return true
    }
}

window.validateDOB = () => {
    const element = document.getElementById('dob')
    const dob = element.value
    const year = new Date(dob).getFullYear()
    if (!dob || year > 2010 || year < 1950) {
        setError(element, 'Date must be between 1950 and 2010')
        return false
    }
    else {
        removeError(element)
        return true
    }
}

window.validateGender = () => {
    const genderElement = document.getElementById('gender')
    const gender = genderElement.value
    if (gender === "") {
        setError(genderElement,'Select a gender')
        return false
    }
    else {
        removeError(genderElement)
        return true
    }
}


window.validateEducation = () => { 
    const element = document.getElementById('education')
    const education = element.value
    if (education === "") {
        setError(element,'Select education')
        return false
    }
    else {
        removeError(element)
        return true
    }
}

window.validateUserName = () => { 
    const element = document.getElementById('username')
    const username = element.value
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data?.some(user => user.username === username)) {
        setError(element,'Username already taken')
        return false
    }
    else if (username.length < 3) {
        setError(element, 'Username too short')
        return false
    }
    else if (username.length > 32) { 
        setError(element, 'Username too long')
        return false
    }
    else {
        removeError(element)
        return true
    }
}

window.validatePassword = () => {
    const element = document.querySelector('.password_input')
    const password = document.getElementById('password').value
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[0-9a-zA-Z!@#$%^&]{8,15}$/;
    if (passwordRegex.test(password)) { 
        removeError(element)
        return true
    }
    else {
        setError(element,'password must contain one upper case letter, one special character, one lower case letter and one numeric character')
        return false
    }
}

window.validatePan = () => {
    const element = document.getElementById('pan')
    const pan = element.value
    const panregex = /^[A-Z]{5}\d{4}[A-Z]$/
    if (panregex.test(pan)) { 
        removeError(element)
        return true
    }
    else {
        setError(element,'Invalid Pan number')
        return false
    }
}

window.validateFileUpload = () => {
    const element = document.getElementById('file')
    const file = element.files[0]
    const upload_btn = document.querySelector('.upload_btn')
    const upload_btn_text = document.querySelector('.btn_text')
    if (file) {
        upload_btn_text.innerHTML = file.name
    }
    if (!file) {
        setError(upload_btn,'Select a file')
        return false
    }
    else if (file.size > 2000000) {
        setError(upload_btn,'File too large')
        return false
    }
    else {
        removeError(upload_btn)
        return true
    }
}

window.validateForm = async (event) => {
    event.preventDefault();
    try {
        let image = await saveImage()
        const data = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value,
            contact: document.getElementById('contact').value,
            dob: document.getElementById('dob').value,
            gender: document.getElementById('gender').value,
            occupation: document.getElementById('occupation').value,
            education : document.getElementById('education').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            pan: document.getElementById('pan').value,
            file: {
                url: image,
                size: document.getElementById('file').files[0]?.size,
                type: document.getElementById('file').files[0]?.type
            }
        }
        const isNameValid = validateName()
        const isEmailValid = validateEmail()
        const isContactValid = validateContact()
        const isDOBValid = validateDOB()
        const isOccupationValid = validateEducation()
        const isUserNameValid = validateUserName()
        const isPasswordValid = validatePassword()
        const isFileValid = validateFileUpload()
        const isPanValid = validatePan()
        const isGenderValid = validateGender()
        if (isNameValid && isEmailValid && isContactValid && isDOBValid && isOccupationValid && isUserNameValid && isPasswordValid && isFileValid && isPanValid && isGenderValid) { 
            if (localStorage.getItem('userData')) {
                const oldData = JSON.parse(localStorage.getItem('userData'))
                localStorage.setItem('userData', JSON.stringify([...oldData, { ...data }]));
            }
            else {
                localStorage.setItem('userData', JSON.stringify([{ ...data }]));
            }
            const app = document.querySelector('.App');
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.addEventListener('click', () => app.removeChild(modal))
            modal.innerHTML = `
                <div class="modal_content">
                    <img src="https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png" alt="success" width="100"/>
                    <p>Saved Successfully</p>
                </div>`;
            app.appendChild(modal);
            setTimeout(() => {
                app.removeChild(modal)
                location.reload()
            }, 2000) 
        }
        else {
            console.error('Enter Valid form data')
        }
    }
    catch (error) {
        console.error(error)
    }
}
