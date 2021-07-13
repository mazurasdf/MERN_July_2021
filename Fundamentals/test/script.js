const getValueFromId = (id) => document.getElementById(id).value;

const add = () => {
    document.getElementById("list").innerHTML += `<li>${getValueFromId("item")}</li>`;
    document.getElementById("item").value = "";
}