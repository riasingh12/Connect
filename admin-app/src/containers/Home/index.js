import React from 'react'
import Layout from '../../components/Layout'
import { Jumbotron } from 'react-bootstrap'
/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <Layout>
      <Jumbotron style={{ margin: '5rem', background: '#fff' }} className="text-center">
        <h1>Welcome</h1>
        <p>adfsghjkl;jhgftdrgfhjkgtrehgjktrewtghftdrhgjrtsethgfjtreyhfjgdrghgrhgfd</p>
        
      </Jumbotron>
    </Layout>
  )

}

export default Home