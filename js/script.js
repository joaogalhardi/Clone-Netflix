// Perguntas Frequentes// 

const questions = document.querySelectorAll(".questions-list button");

function activeQuestion(event){
  const question = event.currentTarget
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);
  
  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function eventsQuestions(question){
  question.addEventListener("click", activeQuestion);
}

questions.forEach(eventsQuestions);