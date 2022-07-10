import City from "components/city";
import Pointer from "components/pointer";
import { G } from "core/graph";
import { useRouter } from "next/router";
import { Card, CardBody, Container } from "reactstrap";

type routeInput = {
  startingStation: string
  destiny: string
}

export default function Result() {
  const router = useRouter();
  const data = router.query as routeInput;
  const trainRoute = G.bfs(data.startingStation, data.destiny)
  
  return (
  <Container>
    
    <div style={{marginBottom: '2em'}}>
      <h1 style={{textAlign: 'center'}}>Sua rota ferroviária</h1>
    </div>  
    <Card style={{textAlign: 'center', maxWidth: 450, margin: '2em auto'}}>
      <CardBody>
        <h4>Início</h4>
        {
          trainRoute.map((station, index) => {
            let position = ''
            if (index === 0) position = 'primary'
            if (index === trainRoute.length-1) position = 'success'
            return (
              <div key={index} style={{maxWidth: 250, margin: '0 auto'}}>
                <City key={station} position={position} city={station} />
                {
                  index < trainRoute.length-1 ?
                  (<Pointer time={'bla bla'} />) : (<></>)
                }
              </div>
            )
          })
        }
        <h4>Fim</h4>
      </CardBody>
    </Card>
  </Container>
  )
}
