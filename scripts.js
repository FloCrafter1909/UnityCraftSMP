document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Vielen Dank für deine Nachricht!');
        form.reset();
    });

    const uploadForm = document.getElementById('upload-form');
    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const fileInput = document.getElementById('image-upload');
        const file = fileInput.files[0];
        if (file) {
            const galleryDisplay = document.getElementById('gallery-display');
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            galleryDisplay.appendChild(img);
            alert('Bild hochgeladen!');
        }
    });
});
