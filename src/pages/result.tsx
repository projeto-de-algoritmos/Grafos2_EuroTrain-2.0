import City from "components/city";
import Pointer from "components/pointer";
import { G } from "core/graph";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

type routeInput = {
  startingStation: string
  destiny: string
}

export default function Result() {
  const router = useRouter();
  let lastTime = 0;
  const data = router.query as routeInput;
  const fastRoute = G.dijkstra(data.startingStation, data.destiny);
  const totalHours = Math.floor(fastRoute[data.destiny]);
  const totalMinutes = Math.ceil((fastRoute[data.destiny] - totalHours) * 60);
  const finalTime = `${totalHours} horas e ${totalMinutes} minutos`;
  return (
  <Container>
    <div style={{marginBottom: '2em'}}>
      <h1 style={{textAlign: 'center'}}>Sua rota ferroviária</h1>
      <h4 style={{textAlign: 'center'}}>Tempo total de viagem de {data.startingStation} até {data.destiny}: {finalTime}</h4>
    </div> 
    <Row className="row justify-content-center">
      <Col>
        <Card style={{textAlign: 'center', maxWidth: 450, margin: '2em auto'}}>
          <CardBody>
            <h4>Início</h4>
            {
              Object.keys(fastRoute).map((stationName, index) => {
                let position = ''
                const time = fastRoute[stationName] - lastTime;
                lastTime = fastRoute[stationName]
                if (index === 0) position = 'primary'
                if (index === Object.keys(fastRoute).length-1) position = 'success'
                return (
                  <div key={index} style={{maxWidth: 250, margin: '0 auto'}}>
                    {
                      index > 0 ?
                      (<Pointer time={time} />) : (<></>)
                    }
                    <City key={stationName} position={position} city={stationName} />
                  </div>
                )
              })
            }
            <h4>Fim</h4>
            
            <br />
            <Row>
              <Col>
              <Button onClick={() => router.back()}>
                Voltar
              </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}
