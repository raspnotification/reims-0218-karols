import React from "react"
import { Card, CardTitle, CardText, CardImgOverlay } from "reactstrap"

const ChoicePrestation = ({ image, description, title }) => {
  return (
    <div className="mb-4">
      <Card inverse>
        <img
          className="img-fluid"
          width="500"
          height="250"
          src={image}
          alt="Name of service"
        />

        <CardImgOverlay>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default ChoicePrestation
