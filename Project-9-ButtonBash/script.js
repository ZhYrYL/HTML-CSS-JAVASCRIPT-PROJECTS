//STYLING THE MAIN WEBPAGE USING JAVASCRIPT ONLY
document.body.style.margin = "0";
document.body.style.backgoundColor = "#511281";

//Connecting webpage to style.css using JavaScript
const link = document.querySelector("link");
link.setAttribute("rel","stylesheet");
link.setAttribute("href","css/style.css");

//Styling the main container of the webpage
const mainContainer = document.body.firstElementChild;
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.height = "100vh";

const header = document.querySelector("#header");
header.style.flex = "1 1";
header.style.display = "flex";
//header.style.backgroundColor = "teal";
const addStyle = document.querySelector("#style");
addStyle.style.flex = "1 1";
//addStyle.style.backgroundColor = "red";
addStyle.style.display = "flex";
addStyle.style.alignItems = "center";
const webMode = document.querySelector("#mode");
webMode.style.flex = "1 1";
//webMode.style.backgroundColor = "yellow";
webMode.style.display = "flex";
webMode.style.justifyContent = "flex-end";
webMode.style.alignItems = "center";


const settings = document.querySelector("#settings");
settings.style.flex = "2 1";
//settings.style.backgroundColor = "lightgreen";
settings.style.display = "flex";
settings.style.justifyContent = "space-around";
settings.style.alignItems = "center";

const presentation = document.querySelector("div.presentation");
present.style.border = "5px solid #D44000";
present.style.width = "700px";
present.style.padding = "10px";
present.style.borderRadius = "20px";
presentation.style.flex = "10 1";
//presentation.style.backgroundColor = "lightblue";
presentation.style.display = "flex";
presentation.style.flexDirection = "column";
presentation.style.justifyContent = "center";
presentation.style.alignItems = "center";

const image = document.body.firstElementChild.children[2].firstElementChild.firstElementChild;
const description = document.body.firstElementChild.children[2].firstElementChild.firstElementChild.nextElementSibling;
image.style.width = "700px";

const addStyling = () => {
    link.setAttribute("href","css/styling.css");
    image.setAttribute("src","img/animated-eleven.jpg");
};
const noStyle = () => {
    link.setAttribute("href","css/style.css");
    image.setAttribute("src","img/eleven.png");
};
const lightMode = () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    settings.style.backgroundColor = "#FCFFE7";
    header.style.backgroundColor = "#DBA39A";
    presentation.style.backgroundColor = "#F0DBDB";
    description.style.backgroundColor = "white";
};
const darkMode = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    settings.style.backgroundColor = "#393E46";
    header.style.backgroundColor = "black";
    presentation.style.backgroundColor = "black";
    description.style.backgroundColor = "black";

    
};
const textColor = () => {
    const inputValue = document.body.firstElementChild.children[1].firstElementChild.firstElementChild.nextElementSibling.value;
    description.style.color = inputValue;
};

const contrast = () => {
    image.classList.toggle("contrast");
    
};
const saturate = () => {
    image.classList.toggle("saturate");
};
const grayscale = () => {
    image.classList.toggle("grayscale");
};
const bold = () => {
    description.classList.toggle("bold");
};
const italic = () => {
    description.classList.toggle("italic");
};
const underline = () => {
    description.classList.toggle("underline");
};
const setPicture = () => {
    const input = settings.querySelectorAll("input")[1];
    image.setAttribute("src", input.value);
};
const removeText = () => {
    description.classList.remove("underline","bold","italic");
};
const removeImage = () => {
    image.classList.remove("contrast","grayscale","saturate");
};
