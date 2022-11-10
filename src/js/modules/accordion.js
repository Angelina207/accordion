export function accordion() {
    (() => {
        const accordionQuestion = document.querySelectorAll('.accordion-question');
        const accordionAnswer = document.querySelectorAll('.accordion-answer');
        const accordionArrow = document.querySelectorAll('.accordion-arrow');

        accordionQuestion.forEach((el) => {
            el.addEventListener('click', () => {
                let currContent = el.nextElementSibling;
                let currArrow = el.lastElementChild;

                function resetStyles() {
                    accordionQuestion.forEach(item => item.classList.remove('is-active'));
                    accordionAnswer.forEach(item => item.style.maxHeight = null);
                    accordionAnswer.forEach(item => item.style.paddingBottom = null);
                    accordionArrow.forEach(item => item.style.transform = 'rotate(0deg)');
                }

                if (currContent.style.maxHeight) {
                    resetStyles()
                } else {
                    resetStyles()

                    el.classList.add('is-active');
                    currContent.style.maxHeight = currContent.scrollHeight + 'px';
                    currContent.style.paddingBottom = 19 + 'px';
                    currArrow.style.transform = 'rotate(180deg)';
                }
            })
        })
    })()
}