const eventRoot = $('#newevents')[0];
const template = $('#evt-template')[0].content.querySelector(".evt");
const baseURL = 'https://danielzgtg.duckdns.org';
function openXHR(endpoint, goodCb, badCb) {
const xhr = new XMLHttpRequest();
xhr.open('GET', baseURL + endpoint);
xhr.withCredentials = false;
xhr.onload = function() {
goodCb(xhr.responseText)
};
if (badCb != null) {
const f = function() {
badCb()
};
//xhr.onabort = f;
xhr.onerror = f;
}
xhr.send()
}
let nextEventID = 0;
console.log('Loaded e-vent carousel');
function doupdate() {
console.log('Updating carousel');
openXHR('/count', function(text) {
console.log('Count response ' + text);
const count = parseInt(text);
console.log('Have ' + count + ' events');
if (count > nextEventID + 10) {
console.log('Skipping old events to keep up with feed')
nextEventID = count - 5
}
if (nextEventID < count) {
console.log('Will fetch: ' + nextEventID);
openXHR('/events/' + nextEventID, function(text) {
const parsed = JSON.parse(text);
console.log('Parsed event: ' + parsed);
nextEventID++;
const cloned = template.cloneNode(true);
cloned.querySelector("h2").textContent = parsed.name;
cloned.querySelector(".evt-desc").textContent = parsed.desc;
cloned.querySelector(".evt-bg").style.backgroundImage = "url(../cdn/" + parsed.bg + ".jpg";
eventRoot.prepend(cloned);
setTimeout(doupdate, 500)
}, function() {
setTimeout(doupdate, 2000)
})
} else {
console.log('No events to update');
setTimeout(doupdate, 2000)
}
}, function() {
setTimeout(doupdate, 2000)
})
}
setTimeout(doupdate, 1000);
