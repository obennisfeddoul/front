import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, CardImg, CardText, CardTitle, Col, Row, Table } from 'reactstrap';
import bg1Image from 'assets/img/bg/background_640-1.jpg';

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
        <Col>
          <Row>
            <Col>
              <Card body style={{position:'flex'}}>
                <Card className="flex-row" style={{width: 700}}>
                  <CardImg
                    className="card-img-left"
                    src={bg1Image}
                    style={{ width: 'auto', height: 150 }}
                  />
                  <CardBody>
                    <CardTitle>Bidding</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
                <Card className="flex-row" style={{width: 700}}>
                  <CardImg
                    className="card-img-left"
                    src={bg1Image}
                    style={{ width: 'auto', height: 150 }}
                  />
                  <CardBody>
                    <CardTitle>Buy X OF Y Product</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Page>
  );
};

export default TemplatesPage;
