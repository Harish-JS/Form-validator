window.saveImage = () => {
    return new Promise((resolve, reject) => {
        const fileInput = document.getElementById('file');

        if (fileInput?.files && fileInput.files[0]) {
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        } else {
            resolve(null);
        }
    });
};