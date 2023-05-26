
const firebaseConfig = {
    apiKey: "AIzaSyAJDDXdfUcieDnGtI4hLJOowHZsLzBGGh0",
    authDomain: "pixel-web-1182d.firebaseapp.com",
    databaseURL: "https://pixel-web-1182d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pixel-web-1182d",
    storageBucket: "pixel-web-1182d.appspot.com",
    messagingSenderId: "1040062351826",
    appId: "1:1040062351826:web:207801206f9bfe2cc8600b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contactForm1')
var newsLetterDB = firebase.database().ref('newsletter')

document.querySelector(".subscribe-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget)

    //   Get input Values
    let contactObj = {}

    for (const [key, value] of data)
        contactObj = { ...contactObj, [key]: value }


    console.log(contactObj);

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

    console.log(confirm)
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