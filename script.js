const questionContainers = document.querySelectorAll('.question-container');

questionContainers.forEach(container => {
  const question = container.querySelector('.faq-question');
  const plusIcon = container.querySelector('[id^="plus-icon"]');
  const minusIcon = container.querySelector('[id^="minus-icon"]');
  const answerId = container.dataset.answer;
  const answer = document.getElementById(answerId);

  question.addEventListener('click', function() {
    // Hide all answers and plus icons
    questionContainers.forEach(container => {
      const answerId = container.dataset.answer;
      const answer = document.getElementById(answerId);
      const plusIcon = container.querySelector('[id^="plus-icon"]');
      const minusIcon = container.querySelector('[id^="minus-icon"]');

      answer.classList.add('hidden');
      plusIcon.classList.remove('hidden');
      minusIcon.classList.add('hidden');
    });

    // Toggle the visibility of the clicked answer and corresponding icons
    answer.classList.toggle('hidden');
    plusIcon.classList.toggle('hidden');
    minusIcon.classList.toggle('hidden');
  });
});
