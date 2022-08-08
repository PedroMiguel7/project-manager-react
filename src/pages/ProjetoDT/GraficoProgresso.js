import { Progress, Col, Row } from 'rsuite';
import { useState } from 'react';

export default function Grafico(props) {

    var calculo;
    if (props.TasksConcluidAs !== 0) {
        calculo = (props.TasksConcluidAs * 100) / props.totalTasks
    } else {
       calculo = 0
    }
    const value = Math.round(calculo)
    const [percent, setPercent] = useState(value);
    
    const status = percent === 100 ? 'success' : null;
    const color = percent === 100 ? '#52c41a' : '#3385ff';
    return (
        <>
            <Row>
                <Col md={6}>
                    <div style={{ width: 120, marginTop: 10 }}>
                        <Progress.Circle percent={percent} strokeColor={color} status={status} />
                    </div>
                </Col>
            </Row>
        </>
    );

}
