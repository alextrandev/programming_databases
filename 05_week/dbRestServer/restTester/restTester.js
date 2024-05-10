'use strict';

(function() {
  let method = 'GET';

  const init = () => {
    const urifield = document.querySelector("#urifield");
    const jsonarea = document.querySelector("#jsonarea");
    const messagearea = document.querySelector("#messagearea");
    // console.log(urifield, jsonarea, messagearea);

    document.querySelector("#submit").addEventListener('click', send);
    document.querySelector("#methods").addEventListener('change', choose);
  }

  const choose = e => {
    messagearea.textContent = "";
    method = e.target.value;
  }

  const send = async () => {

    const options = {
      method: method,
      mode: 'cors',

    };

    if (method == "PUT" || method === "POST") {
      options.body = jsonarea.value;
      options.headers = {'Content-Type' : 'application/json'}
    }

    try {
      const result = await fetch(urifield.value, options);
      const data = await result.json();
      messagearea.textContent = JSON.stringify(data, null, 4)
    } catch (err) {
      console.log(err.message);
    }
  }

  document.addEventListener('DOMContentLoaded', init)
})();