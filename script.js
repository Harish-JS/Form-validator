
import Form from './components/Form.js';
import Navbar from './components/Navbar.js';
import Search from './components/Search.js';

const root = document.getElementById('root');
let currentWindow = 'section1';

window.changeWindow = (window) => {
    if (currentWindow !== window) {
        currentWindow = window;
        root.innerHTML = App();
    }
}

window.clearData = () => {
    if (localStorage.getItem('userData')) {
        localStorage.removeItem('userData');
        currentWindow = 'section1';
        location.reload();
        root.innerHTML = App();
    }
}

const App = () => {
    return `<div class='App'>
        ${Navbar()}
        ${currentWindow === 'section1' ? Form() : Search()}
    </div>`;
};

root.innerHTML = App();
