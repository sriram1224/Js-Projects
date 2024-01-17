document.getElementById("search_form").addEventListener("submit", searchEmoji);
document.getElementById("search_feild").addEventListener("keyup", autosearch);
window.onload = () => displaySearchResults();

function searchEmoji(e) {
    e.preventDefault();
    const value = document.getElementById("search_feild").value;
    displaySearchResults(value);
    return false;
}

function autosearch(e) {
    const value = e.target.value;
    displaySearchResults(value);
}

function displaySearchResults(searchQuery = "") {
    const filtered = emojiList.filter(e => {
        if (e.description.indexOf(searchQuery) != -1) {
            return true;
        }
        if (e.aliases.some(elem => elem.startsWith(searchQuery))) {
            return true;
        }
        if (e.tags.some(elem => elem.startsWith(searchQuery))) {
            return true;
        }
    });
    const parent = document.getElementById("search_results");
    parent.innerHTML = "";
    filtered.forEach(e => {
        const new_row = document.createElement('tr');
        const newEmoji = document.createElement('td');
        const new_aliases = document.createElement('td');
        const new_desc = document.createElement('td');
        newEmoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases;
        new_desc.innerText = e.description;
        new_aliases.innerText = new_aliases.innerText.replaceAll('_', " ");

        newEmoji.classList.add("emoji");
        new_aliases.classList.add("aliases");
        new_desc.classList.add("desc");
        new_row.appendChild(newEmoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_desc);
        parent.appendChild(new_row);
    });
}