import { Fragment, memo, useEffect, useRef } from "react";

const Level = ({level, inProgress, handleLevel}) => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    useEffect(()=>{
        if (inProgress){
            switch (level){
                case 1:
                    ref1.current.classList.add('active');
                    ref2.current.classList.remove('active');
                    ref3.current.classList.remove('active');
                    break;
                case 2:
                    ref1.current.classList.remove('active');
                    ref2.current.classList.add('active');
                    ref3.current.classList.remove('active');
                    break;
                case 3:
                    ref1.current.classList.remove('active');
                    ref2.current.classList.remove('active');
                    ref3.current.classList.add('active');
                    break;
                default:
                    break;
            }
        }
        
    },[level, inProgress]);

    return (<Fragment>
        {inProgress ? 
            <div className="level">
                <div ref={ref1} className="levelDiv ">
                    <div className="levelNumber">1</div>
                    <p>Débutant</p>
                </div>
                <div ref={ref2} className="levelDiv">
                    <div className="levelNumber">2</div>
                    <p>Confirmé</p>
                </div>
                <div ref={ref3} className="levelDiv">
                    <div className="levelNumber">3</div>
                    <p>Expert</p>
                </div>
            </div>
            : <div className="nextLevel">
                <p>Bravo! Vous pouvez passer au niveau supérieur</p>
                <div onClick={handleLevel} >NIVEAU SUPERIEUR</div>
            </div>
        }
    </Fragment>
        
    )
}

export default memo(Level);