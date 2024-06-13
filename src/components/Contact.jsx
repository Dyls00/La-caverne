const Contact = () => {
    return (
        <div id="Contact" className="container mx-auto w-full max-w-screen-2xl bg-white py-8 rounded-lg h-auto lg:h-screen mb-20"> 
            
                <div className="py-8 lg:py-16  mx-auto max-w-screen-md ">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-dark-purple">Contactez-nous</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-dark-purple sm:text-xl">Si vous avez des questions sur notre BDE ou notre école, n'hésitez pas</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label for="nomprenom" className="block mb-2 text-sm font-medium text-dark-purple">Votre Nom & Prénom</label>
                            <input type="text" id="nomprenom" className="shadow-sm bg-gray-50 border border-gray-300 text-dark-purple text-sm rounded-lg focus:ring-dark-purple focus:border-dark-purple block w-full p-2.5 " placeholder="Nom & Prénom" required />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-dark-purple">Votre Adresse Mail</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-dark-purple text-sm rounded-lg focus:ring-dark-purple focus:border-dark-purple block w-full p-2.5 " placeholder="votremail@estiam.com" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-dark-purple">Sujet du Message </label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-dark-purple bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-dark-purple focus:border-dark-purple" placeholder="Objet du Message ..." required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-dark-purple">Votre Message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-dark-purple bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Corps de Message ..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm  text-center text-white rounded-lg bg-orange sm:w-fit hover:bg-dark-purple focus:ring-4 focus:ring-dark-purple">Envoyer</button>
                    </form>
                </div>
        </div>
       
    );
}

export default Contact;