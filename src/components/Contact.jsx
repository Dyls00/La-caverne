import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { TitleContact } from '../constants';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setFormError("Veuillez compléter tous les champs.");
      alert("Veuillez compléter tous les champs.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        {
          from_name: form.name,
          to_name: 'BDE',
          from_email: form.email,
          to_email: process.env.REACT_APP_EMAILJS_TO_EMAIL,
          subject: form.subject,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID 
      )
      .then(
        () => {
          setLoading(false);
          alert('Merci ! Nous reviendrons vers vous le plus vite possible');

          setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setFormError(null);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Ahh, quelque chose s\'est mal passé. Éssayez de nouveau.');
        }
      );
  };

  return (
    <section id="Contact" className="container mx-auto w-full max-w-screen-2xl bg-white py-8 rounded-lg h-auto lg:min-h-screen">
        <div className="py-8 lg:px-0 px-8 mx-auto max-w-screen-md">
            <div id="Missions" className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-dark-purple">{TitleContact.title}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-dark-purple sm:text-xl">{TitleContact.text}</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-dark-purple">Votre Nom & Prénom</label>
                <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-dark-purple text-sm rounded-lg focus:ring-dark-purple focus:border-dark-purple block w-full p-2.5"
                placeholder="Nom & Prénom"
                required
                />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-dark-purple">Votre Adresse Mail</label>
                <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-dark-purple text-sm rounded-lg focus:ring-dark-purple focus:border-dark-purple block w-full p-2.5"
                placeholder="votre@mail.com"
                required
                />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-dark-purple">Sujet du Message</label>
                <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-dark-purple bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-dark-purple focus:border-dark-purple"
                placeholder="Objet du Message"
                required
                />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-dark-purple">Votre Message</label>
                <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-dark-purple bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Corps de Message"
                required
                ></textarea>
            </div>
            <button
                type="submit"
                className="py-3 px-5 text-sm text-center text-white rounded-lg bg-orange sm:w-fit hover:bg-dark-purple focus:ring-4 focus:ring-dark-purple"
            >
                {loading ? 'Envoi en cours' : 'Envoyer'}
            </button>
            </form>
        </div>
    </section>
  );
};

export default Contact;