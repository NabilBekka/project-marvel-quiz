import { memo, useState } from "react"
import { QuizMarvel } from "../dataJson";
import Modal from "./Modal";

const Answers = ({level}) => {
    const [modal, setModal] = useState(false);
    const {debutant , confirme, expert} = QuizMarvel[0].quizz;
    const levelQuestion = level === 1 ? [...debutant] : level === 2 ? [...confirme] : [...expert];

    const showModal = () => {
        setModal(!modal);
    }

    const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_KEY;
    const HASH = 'c0afcb7e98f198b40f2a647afad2086a';
    console.log(API_PUBLIC_KEY ,'////', HASH)

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
                    <td><span onClick={showModal}>INFOS</span></td>
                </tr>)}
            </tbody>
        </table>
        {modal && <Modal exit={showModal}>
            <div className="modalHeader">
                <h2>Mon titre</h2>
            </div>
            <div className="modalBody">
                <p>You can now view my-marvel-quiz in the browser.

                    Local:            http://localhost:3000
                    On Your Network:  http://192.168.1.78:3000

                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </p>
            </div>
            <div className="modalFooter">
                Mon footer
            </div>
        </Modal>}
    </div>)
}

export default memo(Answers);