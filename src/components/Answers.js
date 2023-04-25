import { memo } from "react"
import { QuizMarvel } from "../dataJson";

const Answers = ({level}) => {
    const {debutant , confirme, expert} = QuizMarvel[0].quizz;
    const levelQuestion = level === 1 ? [...debutant] : level === 2 ? [...confirme] : [...expert];

    return (<div className="answers">
        <h2>Les réponses aux questions:</h2>
        <table>
            <thead>
                <tr>
                    <th>Questions</th>
                    <th>Réponses</th>
                </tr>
            </thead>
            <tbody>
                {levelQuestion.map(level=> <tr key={level.id}>
                    <td>{level.question}</td>
                    <td>{level.answer}</td>
                </tr>)}
            </tbody>
        </table>
    </div>)
}

export default memo(Answers);