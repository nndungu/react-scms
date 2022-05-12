import { DatePicker } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Row, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { createStudent } from './../../actions/studentActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

function AddStudent() {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [admissionNumber, setAdmissionNumber] = useState(0)
  const [gradeLevel, setGradeLevel] = useState('')
  const [classLevel, setClassLevel] = useState('')
  const [birthday, setBirthday] = useState({ bday:new Date()})
  const [gradDate, setGradDate] = useState({gday:new Date()})
  const [region, setRegion] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [stdViiNumber, setStdViiNumber] = useState('')
  const [premsNumber, setPremsNumber] = useState('')

  const dispatch = useDispatch()

  const studentCreate = useSelector(state => state.studentCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, student: createdStudent } = studentCreate

  useEffect(()=>{

  },[dispatch, ])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(createStudent(
      firstName, middleName, lastName, admissionNumber, gradeLevel, classLevel, birthday, gradDate, region, city, street,
      stdViiNumber, premsNumber
    ))
  }

  useEffect(() => {
  }, [dispatch, createdStudent])

  return (
    <div>
      <Link to="/sis/students/" className='btn btn-light my-3'>Go Back</Link>
      <Card>
        <Card.Title>Add new student</Card.Title>
        <Card.Body>
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
        {loadingCreate && <Loader />}
          <Form onSubmit={submitHandler}>
            <Row>
              <Col>
              <Form.Group>
                <Form.Label htmlFor="firstName">First Name</Form.Label>
                <Form.Control 
                  id="firstName" 
                  placeholder="First Name" 
                  required
                  type='text'
                  value={firstName}
                  onChange={(e) =>setFirstName(e.target.value)}
                />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group>
                <Form.Label htmlFor="middleName">Middle Name</Form.Label>
                <Form.Control 
                  id="middleName" 
                  placeholder="Middle Name" 
                  type='text'
                  value={middleName}
                  onChange={(e) =>setMiddleName(e.target.value)}
                />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group>
                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                <Form.Control 
                  id="lastName" 
                  placeholder="First Name" 
                  required
                  type='text'
                  value={lastName}
                  onChange={(e) =>setLastName(e.target.value)}
                />
              </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control 
                    id="admissionNumber" 
                    type='number' 
                    placeholder="Addmission Number"
                    required
                    value={admissionNumber}
                    onChange={(e) =>setAdmissionNumber(e.target.value)}
                    />
                </Form.Group>
              </Col>
              <Col>
                <Form.Select label="Grade Level" 
                  type='text'
                  value={gradeLevel}
                  onChange={(e) => setGradeLevel(e.target.value)}
                
                >
                  <option>Grade Level</option>
                  <option value="O-Level">O Level</option>
                  <option value="A-Level">A Level</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select label="Class Level"
                  type='text'
                  value={classLevel}
                  onChange={(e) => setClassLevel(e.target.value)}
                >
                  <option>Class Level</option>
                  <option value="Form One">Form One</option>
                  <option value="Form Two">Form Two</option>
                  <option value="Form Three">Form Three</option>
                  <option value="Form Four">Form Four</option>
                </Form.Select>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor="birthday">Birthday</Form.Label>
                    <DatePicker
                    />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor="gradDate">Grad Date</Form.Label>
                  <DatePicker
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Select label="Graduating Class">
                  <option>Graduating Class</option>
                  <option value="2023">Class of 2023</option>
                  <option value="2024">Class of 2024</option>
                  <option value="2025">Class of 2025</option>
                </Form.Select>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <Form.Group>
                <Form.Label htmlFor="region">Region</Form.Label>
                <Form.Control 
                  id="region" 
                  placeholder="Region" 
                  value={region}
                  onChange={(e) =>setRegion(e.target.value)}
                />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                <Form.Label htmlFor="city">City</Form.Label>
                <Form.Control 
                  id="city" 
                  placeholder="City" 
                  value={city}
                  onChange={(e) =>setCity(e.target.value)}
                />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                <Form.Label htmlFor="street">Street</Form.Label>
                <Form.Control 
                  id="street" 
                  placeholder="Street" 
                  value={street}
                  onChange={(e) =>setStreet(e.target.value)}
                />
                </Form.Group>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor="stdViiNumber">STD VII NUMBER</Form.Label>
                  <Form.Control 
                    id="stdViiNumber" 
                    placeholder="STD VII NUMBER" 
                    type='text'
                    value={stdViiNumber}
                    onChange={(e) =>setStdViiNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                <Form.Label htmlFor="Prems Number">Prems Number</Form.Label>
                  <Form.Control 
                    id="premsNumber" 
                    placeholder="Prems Number" 
                    type='text'
                    value={premsNumber}
                    onChange={(e) =>setPremsNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <br/>
            <Form.Group>
              <Form.Label htmlFor="Emergency Phone">Emergency Phone</Form.Label>
              <Form.Control id="emergencyPhone" placeholder="Emergency Phone" />
            </Form.Group>
            <br/>
            <Form.Group>
              <Button className='primary' type='submit'>Add student</Button>
            </Form.Group>
          </Form>



        </Card.Body>
      </Card>
    </div>
  )
}

export default AddStudent