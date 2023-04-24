import { Fragment, memo, useRef, useState } from "react";
import { QuizMarvel } from "../dataJson";

const Test = ({level, question, handleQuestion, handleLevel}) => {
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [btnActive, setBtnActive] = useState(false);
    const {debutant , confirme, expert} = QuizMarvel[0].quizz;
    const levelQuestion = level === 1 ? {...debutant} : level === 2 ? {...confirme} : {...expert};

    //Les refs pour les options de réponse afin de gérer leur class
    const answerRef0 = useRef();
    const answerRef1 = useRef();
    const answerRef2 = useRef();
    const answerRef3 = useRef();

    //Se lance au moment ou on clique sur une réponse
    const handleAnswer = e => {
        setBtnActive(true);
        const answer = levelQuestion[question-1].answer;
        const content = e.target.textContent;
        if (`› ${answer}`===content){
            setCorrectAnswer(true);
        }

        //On gère la class "selected"
        switch (e.target){
            case answerRef0.current :
                answerRef0.current.classList.add('selected');
                answerRef1.current.classList.remove('selected');
                answerRef2.current.classList.remove('selected');
                answerRef3.current.classList.remove('selected');
                break;
            case answerRef1.current :
                answerRef0.current.classList.remove('selected');
                answerRef1.current.classList.add('selected');
                answerRef2.current.classList.remove('selected');
                answerRef3.current.classList.remove('selected');
                break;
            case answerRef2.current :
                answerRef0.current.classList.remove('selected');
                answerRef1.current.classList.remove('selected');
                answerRef2.current.classList.add('selected');
                answerRef3.current.classList.remove('selected');
                break;
            case answerRef3.current :
                answerRef0.current.classList.remove('selected');
                answerRef1.current.classList.remove('selected');
                answerRef2.current.classList.remove('selected');
                answerRef3.current.classList.add('selected');
                break;
            default:
                break;
        }
    }

    //Se lance quand on clique sur "Suivant"
    const handleNext = () => {
        handleQuestion(correctAnswer);
        setCorrectAnswer(false);
        setBtnActive(false);

        //On retire la class "selected"
        answerRef0.current.classList.remove('selected');
        answerRef1.current.classList.remove('selected');
        answerRef2.current.classList.remove('selected');
        answerRef3.current.classList.remove('selected');
    }

    //Se lance quand on clique sur "Terminer"
    const handleFinish = () => {
        handleLevel(correctAnswer);
        setCorrectAnswer(false);
        setBtnActive(false);

        //On retire la class "selected"
        answerRef0.current.classList.remove('selected');
        answerRef1.current.classList.remove('selected');
        answerRef2.current.classList.remove('selected');
        answerRef3.current.classList.remove('selected');
    }

    const btn = question < 10 ? <button onClick={handleNext} disabled={!btnActive}>Suivant</button> : 
              <button onClick={handleFinish} disabled={!btnActive}>Terminer</button>;
    const newQuestion = levelQuestion[question-1];

    return (<Fragment>
        <div className="test">
            <h2>{newQuestion.question}</h2>
            <p ref={answerRef0} onClick={handleAnswer}>&rsaquo; {newQuestion.options[0]}</p>
            <p ref={answerRef1} onClick={handleAnswer}>&rsaquo; {newQuestion.options[1]}</p>
            <p ref={answerRef2} onClick={handleAnswer}>&rsaquo; {newQuestion.options[2]}</p>
            <p ref={answerRef3} onClick={handleAnswer}>&rsaquo; {newQuestion.options[3]}</p>
        </div> 
        {btn}
    </Fragment>)
}

export default memo(Test);