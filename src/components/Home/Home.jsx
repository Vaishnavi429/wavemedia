import React from 'react';
import './Home.scss';
import BlogPost from '../BlogPost/BlogPost';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import data from '../blogData';
import { Link, useRouteMatch } from 'react-router-dom';
import Categories from '../Categories/Categories';

const Home = () => {
    const blogData = data();

    return (
        <>
            <Categories />
            <Container fluid className="home__container pb-5">
                <Row xs={1} md={2} lg={3} xl={3} xxl={4}>
                    {
                        blogData.map((data, index) =>
                            <Nav.Link as={Link} to={`${data.id}`} key={index} >
                                <Col className='my-3' >
                                    <BlogPost
                                        id={data.id}
                                        postImageUrl={data.postImageUrl}
                                        title={data.title}
                                        description={data.description}
                                        reads={data.reads}
                                        time={data.time}
                                        categories={data.categories}
                                    />
                                </Col>
                            </Nav.Link>
                        )
                    }
                </Row>
            </Container>
        </>
    )
}

export default Home;