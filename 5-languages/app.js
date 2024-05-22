const languages = prompt('Ваш язык: [ru, en]');

switch (languages) {
    case 'en':
        console.log('Hi');
        break;
    case 'ru':
        console.log('Привет');
        break;
    default:
        console.log("Я вас не понимаю");
}