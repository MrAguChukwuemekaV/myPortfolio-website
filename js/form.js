function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "chukwuemekavagu@gmail.com",
        Password : "$developer001",
        To : 'chukwuemekavagu@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New contact Form Enquiry",
        Body : "Name: " + document.getElementById('name').value
          + " <br> Email: " + document.getElementById('email').value
          + " <br> Project/Work: " + document.getElementById('project').value
          + " <br> Message: " + document.getElementById('message').value
    }).then(
      message => alert('Message sent successfully')
    );
}



// (function() {
//   // https://dashboard.emailjs.com/admin/account
//   emailjs.init({
//     publicKey: "YOUR_PUBLIC_KEY",
//   });
// })();


// window.onload = function() {
//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       // these IDs from the previous steps
//       emailjs.sendForm('contact_service', 'contact_form', this)
//           .then(() => {
//               console.log('SUCCESS!');
//           }, (error) => {
//               console.log('FAILED...', error);
//           });
//   });
// }