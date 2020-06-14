import React from 'react';
import './App.scss';
import './Index.scss';

import Axios from 'axios'

import Intro from './static/intro'
import Services from './static/services'
import Contact from './static/contact'
import Gallery from './components/gallery/gallery'
import Footer from './static/footer'
import Testimonials from './static/testimonials'
import InquiryTransition from './components/inquiry-transition'
import Inquiry from './components/inquiry'
import Clickout from './components/clickout'

import Navbar from './static/navbar';
import Mission from './static/mission';

function App() {
  const [inquiryState, setInquiryState] = React.useState({
    open: false,
    submitLoading: false,
    submitSent: false,
    statusTitleMessage: '',
    statusSubMessage: ''
  })
  const [inquiryForm, setInquiryForm] = React.useState({
    name: '',
    email: '',
    body: '',
    referral: ''
  })

  const emailTest = () => {
    const emailRegex = new RegExp(/\S+@\S+\.\S+/)
    let test = emailRegex.test(inquiryForm.email)
    return test
  }

  const submitEmail = async (e) => {
    e.preventDefault()
    let isValid = emailTest()
    if (!inquiryForm.name || !inquiryForm.email || !inquiryForm.body) return
    if (!isValid) return
    setInquiryState({ ...inquiryState, submitLoading: true })
    Axios.post(process.env.REACT_APP_POST + '/send', inquiryForm)
      .then(res => {
        console.log(res)
        setInquiryState({
          ...inquiryState,
          submitSent: true,
          statusTitleMessage: 'Successfully Sent',
          statusSubMessage: 'Thank you'
        })
      })
      .catch(err => {
        console.log(err)
        setInquiryState({
          ...inquiryState,
          submitSent: true,
          statusTitleMessage: 'Something went wrong',
          statusSubMessage: 'Email us directly at artebellaengraving@yahoo.com'
        })
      })
  }

  const handleInquiryClose = () => {
    setInquiryState({
      ...inquiryState,
      open: false,
    })
    setTimeout(() => {
      setInquiryState(() => ({
        open: false,
        submitLoading: false,
        submitSent: false,
        statusTitleMessage: '',
        statusSubMessage: ''
      }))
      setInquiryForm({
        name: '',
        email: '',
        body: '',
        referral: ''
      })
    }, 500);
  }

  return (
    <div className="Home">
      <InquiryTransition inquiryState={inquiryState}>
        <Inquiry
          submitEmail={submitEmail}
          handleInquiryClose={handleInquiryClose}
          inquiryState={inquiryState}
          setInquiryState={setInquiryState}
          inquiryForm={inquiryForm}
          setInquiryForm={setInquiryForm}
          emailTest={emailTest} />
      </InquiryTransition>
      <Clickout
        state={inquiryState}
        close={handleInquiryClose} />
      <Navbar />
      <main className="home-body">
        <section className="intro">
          <Intro />
        </section>
        <section className="mission" id="Mission">
          <Mission />
        </section>
        <section className="contact">
          <Contact
            inquiryState={inquiryState}
            setInquiryState={setInquiryState} />
        </section>
        <section className="services" id="Services">
          <Services />
        </section>
        <section className="gallery" id="Gallery">
          <Gallery />
        </section>
        <section className="testimonials" id="Testimonials">
          <Testimonials />
        </section>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
