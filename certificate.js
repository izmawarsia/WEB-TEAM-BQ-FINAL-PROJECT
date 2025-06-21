// const form = document.getElementById('certificate-form');
// const generateBtn = document.getElementById('generate-btn');
// const certificateContainer = document.getElementById('certificate-container');
// const certificateName = document.getElementById('certificate-name');
// const certificateCourse = document.getElementById('certificate-course');
// const dateElement = document.getElementById('date');

// generateBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const name = document.getElementById('name').value;
//   const course = document.getElementById('course').value;
//   const date = new Date().toLocaleDateString();

//   certificateName.innerText = name;
//   certificateCourse.innerText = course;
//   dateElement.innerText = `Date: ${date}`;

//   certificateContainer.style.display = 'block';
// });





const form = document.getElementById('certificate-form');
const generateBtn = document.getElementById('generate-btn');
const payBtn = document.getElementById('pay-btn');
const certificateContainer = document.getElementById('certificate-container');
const certificateName = document.getElementById('certificate-name');
const certificateCourse = document.getElementById('certificate-course');
const dateElement = document.getElementById('date');


payBtn.addEventListener('click', () => {
  alert("Payment successful! (Simulated)");
  generateBtn.disabled = false; // Unlock certificate button
  payBtn.innerText = "Payment Complete ✔️";
  payBtn.disabled = true;
  payBtn.style.backgroundColor = "gray";
});

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const course = document.getElementById('course').value;
  const date = new Date().toLocaleDateString();

  if (!name || !course) {
    alert("Please fill in both name and course");
    return;
  }

  certificateName.innerHTML = `<strong>${name}</strong>`;
  certificateCourse.innerHTML = `<strong>${course}</strong>`;
  dateElement.innerText = `Date: ${date}`;

  certificateContainer.style.visibility = 'visible';
});

