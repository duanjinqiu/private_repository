const channel = 1;
const channelTxt = constants[channel];
console.log(channelTxt);

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.response);
        }
    }
}
xhr.open('get', '/huluwa', true);
xhr.send(null);