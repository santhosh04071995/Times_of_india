import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
export default function MyContent({ content }) {
    return (
        <div>
            <h3 className='text-center m-1'>Latest <span className='bg-danger text-light'>News</span> </h3>
            <div className='row'>
                <div className='col-12 col-md-6'>
                {content.map((con) => {
                return (
                    
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={con.urlToImage} />
                        <Card.Body>
                            <Card.Title>{con.title}</Card.Title>
                            <Card.Text>
                                {con.description}
                            </Card.Text>
                            <Card.Link className='text-decoration-none' href={con.url}>Read more</Card.Link>
                        </Card.Body>
                    
                    </Card>
                    )
                })}
                </div>
            
            </div>
            

            </div>
     )
}