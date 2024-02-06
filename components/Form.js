import "../validators/FormValidator.js"
import "../components/ImageProcessor.js"

const Form = () => {
    return`    
        <div class="form_container">    
        <form onsubmit="validateForm(event)" id="form">
                <div class="form_group">
                    <input type="text" name="name" id="name" placeholder="Enter your name" oninput="validateName()">
                </div>
                <div class="form_group">
                    <input type="text" name="email" id="email" placeholder="Enter your email" oninput="validateEmail()">
                </div>
                <div class="form_group">
                    <input type="text" name="contact" id="contact" placeholder="Enter your contact number" oninput="validateContact()">
                </div>
                <div class="form_group">
                    <input type="date" name="dob" id="dob" onchange="validateDOB()">
                </div>
                <div class="form_group">
                    <select id="gender" name="gender" onchange="validateGender()">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div class="form_group">
                    <select id="education" name="education" onchange="validateEducation()">
                        <option value="">Select Education</option>
                        <option value="BE">BE</option>
                        <option value="BTech">BTech</option>
                        <option value="ME">ME</option>
                        <option value="MTech">MTech</option>
                        <option value="Bsc">Bsc</option>
                        <option value="Msc">Msc</option>
                    </select>
                </div>
                <div class="form_group">
                    <input type="text" name="occupation" id="occupation" placeholder="Enter your occupation">
                </div>
                <div class="form_group">
                    <input type="text" name="username" id="username" placeholder="Enter username" oninput="validateUserName()">
                </div>
                <div class="form_group">
                    <div class="password_input">
                        <input type="password" name="password" id="password" placeholder="Enter your password" oninput="validatePassword()">
                        <img id="eye" src="https://cdn-icons-png.flaticon.com/128/2767/2767146.png" alt="show_password" onclick="togglePasswordVisibility()"/>
                        <!-- https://cdn-icons-png.flaticon.com/128/2767/2767146.png -->
                        <!-- https://cdn-icons-png.flaticon.com/128/709/709612.png -->
                    </div>
                </div>
                <div class="form_group">
                    <input type="text" name="pan" id="pan" placeholder="Enter PAN number" oninput="validatePan()">
                </div>
                <div class="form_group">
                    <input type="file" name="file" id="file" accept=".jpeg, .png" hidden onchange="validateFileUpload()"/>
                    <div class="upload_btn" onclick="document.getElementById('file').click()">
                        <p class="btn_text">Upload</p>
                        <img src="https://cdn-icons-png.freepik.com/512/13/13626.png" alt="Upload" width="30"/>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>`
}
window.togglePasswordVisibility = () => {
    const password = document.getElementById('password')
    const eye = document.getElementById('eye')
    if (password.type === 'password') {
        password.type = 'text'
        eye.src = "https://cdn-icons-png.flaticon.com/128/709/709612.png"
    }
    else {
        password.type = 'password'
        eye.src = "https://cdn-icons-png.flaticon.com/128/2767/2767146.png"
    }
}

export default Form
