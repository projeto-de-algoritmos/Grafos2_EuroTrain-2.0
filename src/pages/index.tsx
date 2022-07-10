import { vertices } from "core/graph"
import { useRouter } from "next/router"
import { useState } from "react"
import { Container,
  Card,
  CardBody,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
  Row, 
  Col} from "reactstrap"


type routeInput = {
  startingStation: string
  destiny: string
}

const cities = vertices

export default function Home() {
  const router = useRouter();
  const [trainRouteData, setTrainRouteData] = useState<routeInput>({
    startingStation: cities[0],
    destiny: cities[1]
  })
  

  function sendData(e: any) {
    e.preventDefault()
    router.push({pathname: 'result', query: trainRouteData})
  }
  return (
    <Container>
      <div style={{margin: '2em 0'}}>
        <h1 style={{textAlign: 'center'}}>Euro Train</h1>
        <p className="fw-bold text-muted" style={{textAlign: 'center'}}>
        Seu melhor planejador de rotas ferroviárias Europeias
        </p>
      </div>  
      <Row style={{height: '70vh'}}className="align-items-center justify-content-center">
        <Col lg={8}>
          <Card>
            <CardBody>
              <Form onSubmit={sendData}>
                <FormGroup>
                    <Label for='startingPoint'>
                      Selecione o ponto de partida
                    </Label>
                    <Input
                      id="startingPoint"
                      className="mb-3"
                      type="select"
                      defaultValue={trainRouteData.startingStation}
                      onChange={(e) => {
                        setTrainRouteData({...trainRouteData, startingStation: e.target.value});
                      }}
                    >
                      {
                        cities.map(city => {
                          return (<option key={city}>
                          {city}
                        </option>)
                        })
                      }
                  </Input>
                </FormGroup>
                <FormGroup>
                    <Label for='endingPoint'>
                      Selecione o destino
                    </Label>
                    <Input
                      id="endingPoint"
                      className="mb-3"
                      type="select"
                      defaultValue={trainRouteData.destiny}
                      onChange={(e) => {
                        setTrainRouteData({...trainRouteData, destiny: e.target.value});
                      }}
                    >
                    {
                        cities.map(city => {
                          return (<option key={city}>
                          {city}
                        </option>)
                        })
                      }
                  </Input>
                </FormGroup>
                <Row className="justify-content-end">
                  <Col xs="auto"><Button color="primary">Procurar</Button></Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>

  )
}
