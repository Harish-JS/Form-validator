const Navbar = () => {
    return `
        <nav class='navbar'>
            <div class="menu_btns">
                <div class='navbar_btn' id="user" onclick="changeWindow('section1')">
                    <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/document-circle-blue-512.png" alt='validation' width='50'/>
                    <!-- https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/document-circle-blue-512.png -->
                    <!-- https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg -->
                </div>
                <div class='navbar_btn' id='search' onclick="changeWindow('section2')">
                    <img src="https://static-00.iconduck.com/assets.00/search-circle-icon-1024x1024-bjg935mo.png" alt='validation' width='50'/>
                </div>
            </div>
            <div class='navbar_btn' onclick="clearData()">
                <img src="https://cdn-icons-png.freepik.com/512/5028/5028066.png" alt="bin" width='50' />
            </div>
        </nav>`;
};

export default Navbar;