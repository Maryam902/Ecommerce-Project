document.getElementById('submit-msg').onclick = function myfunction(){
    window.alert('Message sent successfully!');
    // clear form
    const form = document.getElementsByClassName('form-control');
    if (form) {
            form.innerHtml = '';
    }
}