import '../validators/FormValidator.js'
import Users from './Users.js';

const data = JSON.parse(localStorage.getItem('userData')) || null
window.handleSearch = () => {
    const users = document.querySelector('.users')
    if (data) {
        const search = document.getElementById('search_input').value.trim()
        const nameRegex = /^[a-zA-Z]+$/
        if (search === '') {
            return users.innerHTML = Users(data)
        }
        let newData = []
        if (nameRegex.test(search)) {
            newData = data.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
            users.innerHTML = Users(newData)
        }
        const ageRegex = /^\d+$/
        if (ageRegex.test(search)) { 
            newData = data.filter(user => {
                const birthDate = new Date(user.dob);
                const currentDate = new Date();
                const timeDifference = currentDate - birthDate;
                const daysAlive = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                return !(daysAlive > +search)
            })
            users.innerHTML = Users(newData)
        }
        const sizeRegex = /^\d+(mb|kb|Mb|Kb|MB|KB)$/
        if (sizeRegex.test(search)) { 
            const searchTerm = search.toLowerCase()
            const digits = searchTerm.match(/\d+/)[0]
            const unit = searchTerm.match(/(mb|kb)/)[0]
            if (unit === 'mb') {
                newData = data.filter(user => user.file.size < digits * 1024 * 1024)
            }
            if (unit === 'kb') {
                newData = data.filter(user => user.file.size < digits * 1024)
            }
            users.innerHTML = Users(newData)
        }
    }
}

const Search = () => {
    return `
    <div class="search">
        <input type='text' class="search_box" placeholder='Search' id="search_input" name='name' oninput="handleSearch()"/>
        <div class="users">
            ${Users(data)}
        </div>
    </div>`;
}

export default Search;
