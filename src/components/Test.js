import { Fragment, memo, useRef, useState } from "react";
import { QuizMarvel } from "../dataJson";

const Test = ({level, question, inProgress, handleQuestion, handleLevel}) => {
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [btnActive, setBtnActive] = useState(false);
    const {debutant , confirme, expert} = QuizMarvel[0].quizz;
    const levelQuestion = level === 1 ? {...debutant} : level === 2 ? {...confirme} : {...expert};
    const answerRef0 = useRef();
    const answerRef1 = useRef();
    const answerRef2 = useRef();
    const answerRef3 = useRef();

    const handleAnswer = e => {
        setBtnActive(true);
        const answer = levelQuestion[question-1].answer;
        const content = e.target.textContent.substring(e.target.textContent.indexOf(">") + 3);
        if (answer===content){
            setCorrectAnswer(true);
        }
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

    const handleNext = () => {
        handleQuestion(correctAnswer);
        setCorrectAnswer(false);
        setBtnActive(false);

        answerRef0.current.classList.remove('selected');
        answerRef1.current.classList.remove('selected');
        answerRef2.current.classList.remove('selected');
        answerRef3.current.classList.remove('selected');
    }
    const handleFinish = () => {
        handleLevel(correctAnswer);
        setCorrectAnswer(false);
        setBtnActive(false);

        answerRef0.current.classList.remove('selected');
        answerRef1.current.classList.remove('selected');
        answerRef2.current.classList.remove('selected');
        answerRef3.current.classList.remove('selected');
    }

    const btn = question < 10 ? <button onClick={handleNext} disabled={!btnActive}>Suivant</button> : 
              <button onClick={handleFinish} disabled={!btnActive}>Terminer</button>;
    const newQuestion = levelQuestion[question-1];

    return (<Fragment>
        { inProgress ?
            <div className="test">
                <h2>{newQuestion.question}</h2>
                <p ref={answerRef0} onClick={handleAnswer}>&rsaquo; {newQuestion.options[0]}</p>
                <p ref={answerRef1} onClick={handleAnswer}>&rsaquo; {newQuestion.options[1]}</p>
                <p ref={answerRef2} onClick={handleAnswer}>&rsaquo; {newQuestion.options[2]}</p>
                <p ref={answerRef3} onClick={handleAnswer}>&rsaquo; {newQuestion.options[3]}</p>
            </div>  :
            <div></div>
        }
        {inProgress && btn}
        
    </Fragment>)
}

export default memo(Test);