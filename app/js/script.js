console.log("hello!");//# sourceMappingURL=script.js.map

const radioButton = document.querySelectorAll('.toggle__wrapper input');
for (let i = 0; i < radioButton.length; i++){
    radioButton[i].addEventListener('click', (event) => {
        document.getElementById('dark').checked ?
        (document.querySelector('body').classList = 'dark')
        : (document.querySelector('body').classList = 'light');
    });
}