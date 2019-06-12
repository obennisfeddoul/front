import Page from 'components/Page';
import React from 'react';
import { Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle, Col, Row, Table } from 'reactstrap';
import buying from 'assets/img/logo/buying.png';
import bidding from 'assets/img/logo/bidding.jpg';
const TemplatesPage = () => {

  return (
    <Page
      title="Games Templates"
      breadcrumbs={[{ name: 'GamesTemplates', active: true }]}
      className="TemplatesPage"
      showAddButton
      varCreate = 'temp'
    >


          <Row>
            <Col md={6} sm={6} xs={12} className="mb-3">
              <Card className="flex-row">
                <CardImg
                  className="card-img-left"
                  src={bidding}
                  style={{ width: 'auto', height: 150 }}
                />
                <CardBody>
                  <CardTitle>Bidding Game</CardTitle>
                  <Button outline color="primary" href={"/gameEngine/bidding"} >
                    create Bidding Game
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} sm={6} xs={12} className="mb-3">
              <Card className="flex-row">
                <CardImg
                  className="card-img-left"
                  src={buying}
                  style={{ width: 'auto', height: 150 }}
                />
                <CardBody>
                  <CardTitle>Buy X Of Y Product</CardTitle>
                  <Button outline color="primary" href={"/gameEngine/buying"}>
                    create Buying Game
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>

    </Page>
  );
};

export default TemplatesPage;
