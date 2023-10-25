import Image from 'next/image'
import styles from './page.module.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Nav } from 'react-bootstrap';
import Link from 'next/dist/client/link';


export default function Home() {
  return (
    <>
      <Container fluid className={styles.container}>
        <Row>
          <h1 className=" h-100 d-flex align-items-center justify-content-center align-middle">Hi, I'm Bugulet</h1>
          <p className="d-flex align-items-center justify-content-center m-0">Buga Eusebiu Mihail</p>
          <p className="d-flex align-items-center justify-content-center ">Programmer of all kinds</p>
        </Row>
        <Row>
          <Nav className="h-100 p-3 d-flex align-items-center justify-content-center">
            <Button className="m-1" href="/projects">Projects </Button>
            <Button className="m-1" href="/blog">Blog</Button>
            <Button className="m-1" href="/contacs">Contact</Button>
          </Nav>
        </Row>
      </Container>
    </>
  )
}



