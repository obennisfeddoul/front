import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const GamesPage = () => {

  return (
    <Page
      title="Games"
      breadcrumbs={[{ name: 'games', active: true }]}
      className="GamesPage"
      showAddButton
      varCreate = 'Game'
    >
    
      <Row>
        <Col>
            <Row>
              <Col>    
                <Card body>
                  <Table hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Game Game Game</td>
                        <td>Template 1</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Game Game</td>
                        <td>Template 2</td>
                        <td>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
        </Col>
      </Row>
  </Page>
  );
};

export default GamesPage;
