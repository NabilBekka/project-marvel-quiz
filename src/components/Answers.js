import { memo, useState } from "react"
import { QuizMarvel } from "../dataJson";
import Modal from "./Modal";

const Answers = ({level}) => {
    const [modal, setModal] = useState(false);
    const {debutant , confirme, expert} = QuizMarvel[0].quizz;
    const levelQuestion = level === 1 ? [...debutant] : level === 2 ? [...confirme] : [...expert];

    const handleModal = () => {
        setModal(!modal);
    }

    return (<div className="answers">
        <h2>Les réponses aux questions:</h2>
        <table>
            <thead>
                <tr>
                    <th>Questions</th>
                    <th>Réponses</th>
                    <th>Infos</th>
                </tr>
            </thead>
            <tbody>
                {levelQuestion.map(level=> <tr key={level.id}>
                    <td>{level.question}</td>
                    <td>{level.answer}</td>
                    <td><span onClick={handleModal}>INFOS</span></td>
                </tr>)}
            </tbody>
        </table>
        {modal && <Modal exit={handleModal}><div style={{background: "#FFF", height: "300px", width:"500px"}}>Nabil</div></Modal>}
    </div>)
}

export default memo(Answers);