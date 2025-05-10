import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import axios from 'axios'
import Button from './Button'

function ContactForm() {

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        subject: Yup.string().oneOf(['Choose an option', 'Feedback', 'Work Inquiry', 'Collaboration', 'Other']).required('Required'),
        message: Yup.string().required('Required')
    })

    
        /* Server State Handling */
        const [serverState, setServerState] = useState();
        const handleServerResponse = (ok, msg) => {
          setServerState({ok, msg});
        };
        const handleOnSubmit = (values, actions) => {
          axios({
            method: "POST",
            url: "https://formspree.io/f/mblokbev",
           data: values,
          })
            .then(response => {
              actions.setSubmitting(false);
              actions.resetForm();
              handleServerResponse(true, "Thanks!");
            })
            .catch(error => {
              actions.setSubmitting(false);
              handleServerResponse(false, error.response.data.error);
            });
        };
    
  return (
    <div>
        <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#D5491D] font-bold text-xl md:text-2xl text-center my-10'>Contact Form</h3>
        <p className='text-[#C5C5C5] font-serif text-sm text-center'>*Fill out the form below to get in touch with me.*</p>
       <Formik
            initialValues={{
                name: '',
                email: '',
                subject: '',
                message: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit} 
    >
        {({ isSubmitting }) => (
            <Form className='mx-6 md:mx-15 lg:mx-30 xl:mx-60 2xl:mx-80 my-4'>

                <label htmlFor="name" className='text-white font-bold text-lg'>Name</label>
                <Field type="text" name="name" placeholder="Your Name" className="border-2 border-gray-300 rounded-md p-2 w-full mb-4 text-[#C5C5C5]" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mb-2" />

                <label htmlFor='email' className='text-white font-bold text-lg'>Email</label>
                <Field type="email" name="email" placeholder="Your Email" className="border-2 border-gray-300 rounded-md p-2 w-full mb-4 text-[#C5C5C5]" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mb-2" />

                <label htmlFor="subject" className='text-white font-bold text-lg'>Subject</label>
                <Field as="select" name="subject" className="border-2 border-gray-300 rounded-md p-2 w-full mb-4 text-[#C5C5C5]">
                    <option value="Choose an option">Choose an option</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Work Inquiry">Work Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                </Field>
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mb-2" />

                <label htmlFor="message" className='text-white font-bold text-lg'>Message</label>
                <Field as="textarea" name="message" placeholder="Your Message" className="border-2 border-gray-300 rounded-md p-2 w-full mb-4 text-[#C5C5C5] " />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mb-2" />
            
            <button type="submit" className="bg-[#FF8660] text-white rounded-md py-2 px-4 hover:bg-[#FF8660]/80 w-full">Submit</button>

            {serverState && (
                        <p className={!serverState.ok ? "errorMsg" : ""}>
                            {serverState.msg}
                        </p>
            )}
            </Form>
    )}
        </Formik>
    </div>
    
        
    
  )
}

export default ContactForm