"use client"
import React, { useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css'

function ContactForm() {

    const [success, setSuccess] = useState();
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSuccess(null);
            setSubmit(false);
        }, 5000)
    }, [submit])

    const formRef = useRef();

    const formHandler = async (e) => {
        e.preventDefault();

        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

        const name = e.target.FName.value;
        const Lname = e.target.LstName.value;
        const email = e.target.email.value;
        const wNo = e.target.wNo.value;
        const message = e.target.message.value;


        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    to_name: name,
                    from_name: email,
                    message: message,
                    email: email,
                    name: name,
                    lastName: Lname,
                    wNo: wNo,
                    reply_to: "educationidealondon@gmail.com",
                }
            );

            console.log('Email sent successfully:', response);
            setSubmit(true);
            setSuccess(true);

            e.target.FName.value = "";
            e.target.LstName.value = "";
            e.target.email.value = "";
            e.target.wNo.value = "";
            e.target.message.value = "";


        } catch (error) {
            setSubmit(true)
            setSuccess(false)
            console.error('Error sending email:', error);
        }
    }

    return (
        <>
            {submit &&
                <div className={`${styles.messageE} ${success ? styles.success : styles.error}`}>
                    {!success && <p>Something Went Wrong. Try Again</p>}
                    {success && <p>We Will Contact You Shortly</p>}
                </div>
            }
            <form ref={formRef} onSubmit={formHandler} className={styles.container}>
                <div className={styles.FLName}>
                    <div>
                        <label htmlFor="FirstName" >First Name</label>
                        <input name='FName' id='FirstName' type='text' required />
                    </div>
                    <div>
                        <label htmlFor="LstName" >Last Name</label>
                        <input name='LstName' id='LstName' type='text' required />
                    </div>
                </div>

                <div className={styles.EP}>
                    <div>
                        <label htmlFor="email" >Email</label>
                        <input name='email' id='email' type='email' required />
                    </div>
                    <div>
                        <label htmlFor="phone" >Phone No</label>
                        <input name='wNo' id='phone' type='tel' required />
                    </div>
                </div>
                <div className={styles.message}>
                    <label htmlFor="message" >Message</label>
                    <textarea name='message' id='message'></textarea>
                </div>
                <button className={styles.btn}>Send Message</button>
            </form>
        </>
    )
}

export default ContactForm