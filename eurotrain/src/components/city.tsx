import { Card, CardBody } from "reactstrap";

export default function City({city, position}) {
  if (position == undefined) position = 'secondary'
  return (
  <Card color={position} style={{width: 250}}>
    <CardBody>
      <h4>{city}</h4>
    </CardBody>
  </Card>
  )
}