// variable
let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");
// Lanuage arabe!
arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};
// Lanuage english!
english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    title.innerHTML = "مبرمج" ;
    welcome.innerHTML = "مرحبا بكم  في صفحة مبرمج ياسين";
    about.innerHTML = "حولنا";
    aboutText.innerHTML = "انا طالب ادرس البرمجه منذ عامين";
    contact.innerHTML = "اتصل بنا";
}else if(getLanuage ==="english"){
    title.innerHTML = "code with love!";
    welcome.innerHTML = "Welcome to website of coder yassine";
    about.innerHTML = "  About US";
    aboutText.innerHTML = "I am a student of programming for two years";
    contact.innerHTML = "Contact us";

}


}