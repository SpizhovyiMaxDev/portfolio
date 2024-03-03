import { useApp } from "../context/AppProvider";

function Contact() {
    const {sections} = useApp();
    return (
        <section className = "contact" id = "contact" ref = {sections.contactSection}> 
            <div className = "contact__container">
                <p className = "sub-heading">
                    Contact
                </p>
                <h2 className = "heading-primary">
                    Don't be shy! Reach out below. 👇
                </h2>
                <div className = "contact__info">
                    <div className = "contact__info-box">
                        <svg className = "contact__icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokewinecap="round" strokeLinejoin="round">
                            <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                            <path d="M9 4v13"></path>
                            <path d="M15 7v5"></path>
                            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M20.2 20.2l1.8 1.8"></path>
                        </svg>
                        <div className = "contact__text-box">
                            <h3>Location</h3>
                            <a target = "_blank" rel="noreferrer" href = "https://www.westkelownacity.ca/en/our-community/about-west-kelowna.aspx">BC, West Kelowna</a>
                        </div>
                    </div>
                    <div className = "contact__info-box">
                        <svg className = "contact__icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokewinecap="round" strokeLinejoin="round">
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                            <path d="M3 7l9 6l9 -6"></path>
                        </svg>
                    <div className = "contact__text-box">
                        <h3>Mail</h3>
                        <a href="mailto:max.spizhovyi@gmail.com">max.spizhovyi@gmail.com</a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
