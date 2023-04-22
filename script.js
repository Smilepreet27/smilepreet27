document.querySelector("form").addEventListener("submit", function(event) {
    // prevent the default form submission behavior
    event.preventDefault();
  
    // get the name and email values from the form inputs
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
  
    // create the notification message
    const message = `Thank you, ${name}! Your message has been sent to ${email}.`;
  
    // display the notification message
    alert(message);
  
    // reset the form inputs
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
  });
  