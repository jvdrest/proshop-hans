import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import {useLoginMutation} from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import {toast} from 'react-toastify'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  
  const { userInfo } = useSelector((state) => state.auth)

  const { search } = useLocation()            // als je niet bent ingelogd is waarde van search leeg            
  const sp = new URLSearchParams(search)      // als search = leeg (size: 0) dan sp = {size: 0} 
  const redirect = sp.get('redirect') || '/'  // als je bent ingelogd is waarde '/', want redirect is null
                                              // ben je ingelogd en is redirect aanwezig in params dan bv naar shipping
  
  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [userInfo, redirect, navigate])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res, }))
      navigate(redirect)
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      console.log(search, sp, redirect);

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email' className='my-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='password' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-3' disabled={isLoading}>Sign In</Button>

        {isLoading && <Loader />}
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer? <Link to={ redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
        </Col>
      </Row> 
    </FormContainer>
  )
}

export default LoginScreen
