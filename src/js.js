import { getId } from "./getId";

const lis = document.querySelectorAll("body > li");
console.log(window);

let contents = [];
console.log(getId());

Array.from(lis).forEach((element) => {
  console.log(element);
  const title = element.children[0]?.innerText;
  const content = Array.from(element.children).slice(1);

  const contentObj = [];
  content?.forEach((element) => {
    contentObj.push(element.outerHTML);
  });
  contents.push({
    title,
    content: contentObj,
  });
});

// Function to download data to a file
function download(data, filename, type) {
  var file = new Blob([data], { type: type });
  if (window.navigator.msSaveOrOpenBlob)
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename);
  else {
    // Others
    var a = document.createElement("a"),
      href = URL.createObjectURL(file);
    Object.assign(a, {
      href,
      download: filename,
      innerText: "Download json data",
    });
    document.body.prepend(a);
  }
}

const json = JSON.stringify(contents);

console.log({ contents, json });

download(json, "jsq.json", "application/json");
