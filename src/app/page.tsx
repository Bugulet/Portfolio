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
      <h1 className='mb-4 text-4xl font-light leading-none m-10 text-center'>Hello!</h1>
      <h2 className='mb-4 text-2xl font-bold leading-none m-10 text-center'>I'm Buga Eusebiu...</h2>
      <h3 className='mb-4 text-md font-semibold leading-none m-10 text-center'>...or Bugulet 😄</h3>
      <h1 className='mb-4 text-md font-light leading-none m-10 text-center'>Full stack developer from Europe</h1>
      <ul className="flex justify-center">
        <li className="mr-6">
          <a className="text-slate-300 font-bold ring-2 p-2 rounded-lg hover:bg-blue-500" href="/projects">Projects</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/blog">Blog</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/contact">Contact</a>
        </li>
      </ul>
    </>
  )
}



