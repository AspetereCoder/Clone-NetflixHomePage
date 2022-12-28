const paragraphs = document.getElementsByClassName("answer");
const questions = document.getElementsByClassName("question");

for (let question of questions) {
    // Quando o usuario clicar em uma das questions, o display da resposta ficará visivel.
    question.addEventListener("click", () => {
        const paragraph = question.lastElementChild;
        paragraph.classList.toggle("hide");
        console.log(paragraph);
    });
}