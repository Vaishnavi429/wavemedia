import React, { useEffect, useState } from 'react';
import './ShowArticle.scss';
import { useParams } from 'react-router-dom';
import data from '../blogData';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LatestPost from './LatestPost/LatestPost';
import Preview from '../PreviewData/PreviewData';

const ShowArticle = () => {

    const { id } = useParams();
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        updateSidebarBlogPost(id);
    }, []);

    const updateSidebarBlogPost = (id) => {
        setLatestPosts(blogData.filter((postData) => postData.id !== id && postData.time < 24));
    }

    const blogData = data();
    let postInfo = blogData.filter((data) => data.id === id);


    return (
        <Container className='showArticle__mainContainer'>
            <Row className='mt-2'>
                <Col xl={8} className='border rounded showArticle__showPost'>
                    <h3>{postInfo[0].title}</h3>
                    <Preview id= {id}/>
                </Col>
                <Col className='showArticle__sidebar'>
                    <Row xs={1} sm={1} md={1} xl={1} xxl={1}>
                        <Col>
                            <div className="showArticle__latestPost sidebar__container">
                                <div className="sidebar__header">
                                    <h3>Latest Post</h3>
                                </div>
                                <div className="showArticle__sidebar__posts">
                                    {latestPosts.length !== 0 ? latestPosts.map(({ id, title, description, postImageUrl }, index) =>
                                        <Nav.Link as={Link} to={`/${id}`} onClick={() => updateSidebarBlogPost(id)}>
                                            <LatestPost key={index} title={title} description={description} imgUrl={postImageUrl} />
                                        </Nav.Link>
                                    )
                                        : null}
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="showArticle__categories sidebar__container">
                                <div className="sidebar__header">
                                    <h3>Categories</h3>
                                </div>
                                <div className="showArticle__sidebar__categories">

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ShowArticle;