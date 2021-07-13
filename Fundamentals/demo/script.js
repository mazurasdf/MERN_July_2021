const artistName = document.getElementById("artistName");
const albumName = document.getElementById("albumName");
const imgLink = document.getElementById("imgLink");
const list = document.getElementById("list");

const getValueFromId = (id) => document.getElementById(id).value;

const buildElement = (artist, album, img) => {
    return `
        <div class="album">
            <img src="${img}" alt="${album}">
            <h3>${album}</h3>
            <h3><i>${artist}</i></h3>
        </div>
        `;
}

const add = () => {
    list.innerHTML += buildElement(getValueFromId("artistName"), getValueFromId("albumName"), getValueFromId("imgLink"));
    artistName.value = "";
    albumName.value = "";
    imgLink.value = "";
}