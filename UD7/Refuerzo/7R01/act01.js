const hxr = new XMLHttpRequest();

hxr.onreadystatechange = () => {
  if (hxr.readyState === 4 && hxr.status === 200) {
    const arrayJSON = JSON.parse(hxr.responseText);
    let out = '';

    arrayJSON.forEach((tutorial) => {
      out += `<a href="${tutorial.url}">${tutorial.title}</a><br>`;
    });
    document.getElementById('id01').innerHTML = out;
  }
};
hxr.open('GET', 'myTutorials.json', true);
hxr.send();
