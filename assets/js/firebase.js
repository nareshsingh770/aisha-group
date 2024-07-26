function _0x51c0(){const _0x3262ee=['404366wnHgJh','pixel-web-1182d','3426WhKPrO','274076qlVuZS','48972PQLGsb','7hUFIcY','4226680wGhfXx','pixel-web-1182d.appspot.com','1040062351826','9FjCxIP','3335GltABi','2133128nJoPDI','1376416vtuSJe','pixel-web-1182d.firebaseapp.com'];_0x51c0=function(){return _0x3262ee;};return _0x51c0();}const _0x1c040e=_0x4c80;(function(_0x1aaba2,_0x46dcc2){const _0x4d3e8f=_0x4c80,_0x8b6574=_0x1aaba2();while(!![]){try{const _0x7484d0=-parseInt(_0x4d3e8f(0x1a1))/0x1+-parseInt(_0x4d3e8f(0x1a4))/0x2+-parseInt(_0x4d3e8f(0x1a5))/0x3+parseInt(_0x4d3e8f(0x1ad))/0x4+parseInt(_0x4d3e8f(0x1ab))/0x5*(parseInt(_0x4d3e8f(0x1a3))/0x6)+-parseInt(_0x4d3e8f(0x1a6))/0x7*(parseInt(_0x4d3e8f(0x1ac))/0x8)+parseInt(_0x4d3e8f(0x1aa))/0x9*(parseInt(_0x4d3e8f(0x1a7))/0xa);if(_0x7484d0===_0x46dcc2)break;else _0x8b6574['push'](_0x8b6574['shift']());}catch(_0x700ae9){_0x8b6574['push'](_0x8b6574['shift']());}}}(_0x51c0,0x4eebc));function _0x4c80(_0x15e165,_0x4117bd){const _0x51c0b1=_0x51c0();return _0x4c80=function(_0x4c808c,_0x4f22b1){_0x4c808c=_0x4c808c-0x1a0;let _0x2aa00e=_0x51c0b1[_0x4c808c];return _0x2aa00e;},_0x4c80(_0x15e165,_0x4117bd);}const firebaseConfig={'apiKey':'AIzaSyAJDDXdfUcieDnGtI4hLJOowHZsLzBGGh0','authDomain':_0x1c040e(0x1a0),'databaseURL':'https://pixel-web-1182d-default-rtdb.asia-southeast1.firebasedatabase.app','projectId':_0x1c040e(0x1a2),'storageBucket':_0x1c040e(0x1a8),'messagingSenderId':_0x1c040e(0x1a9),'appId':'1:1040062351826:web:207801206f9bfe2cc8600b'};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contactForm1')
var newsLetterDB = firebase.database().ref('newsletter')

document.querySelector(".subscribe-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget)
    const submitedDate = new Date().toLocaleString()
    //   Get input Values
    let contactObj = {date: submitedDate}

    for (const [key, value] of data)
        contactObj = { ...contactObj, [key]: value }

        saveContactInfo(contactObj);

    document.querySelector(".subscribe-form").reset();
    document.querySelector(".contactForm-sent").style.display = 'block'

    setTimeout(() => {
        document.querySelector(".contactForm-sent").style.display = 'none'
    }, 3000)

}

async function saveContactInfo(obj) {
    let newContactInfo = contactFormDB.push();
    //console.log(newContactInfo)

    const confirm = await newContactInfo.set(obj);
}

document.querySelector('.newsletter').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('.news-letter').value
    saveNewsLetter(email)
})
function saveNewsLetter(email) {

    let newEmailNewsLetter = newsLetterDB.push();

    newEmailNewsLetter.set({
        email: email,
    });

    document.querySelector(".newsLetterEmail-sent").style.display = 'block'
    document.querySelector(".newsletter").reset();
    setTimeout(() => {
        document.querySelector(".newsLetterEmail-sent").style.display = 'none'

    }, 3000)
}