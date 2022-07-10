import dayjs from 'dayjs'
import {HiArrowNarrowDown} from 'react-icons/hi'
import { Col, Row } from 'reactstrap'

export default function Pointer({time}: {time?: any}) {
  if (time) {
    const minutes = time * 60;
    time = `${dayjs.duration(minutes, 'minutes').format(`H [horas]\nm [minutos]`)}`;
  }
  return (
  <div style={{margin: '0 .8em'}}>
    <Row className="row justify-content-center">
      <Col xs='auto'>
        <HiArrowNarrowDown size='50' />
      </Col>
      {
        !!time ?(<Col xs='auto'>{time}</Col>) : (<></>)
      }

    </Row>

  </div>
  )
}