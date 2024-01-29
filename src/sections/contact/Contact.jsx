import './contact.css' 
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">

    <h2>Contact</h2>
    <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
                <div className="contact__option-icon"><i class="fa-solid fa-envelope"></i></div>
                <h4>Email</h4>
                <a href="mailto:refinedradical@gmail.com">refinedradical@gmail.com</a>
            </article>
            <article className="contact__option">
                <div className="contact__option-icon"><i class="fa-solid fa-phone"></i></div>
                <h4>Mobile</h4>
                <h5>+61 477 114 441</h5>
            </article>
        </div>
        <form action="https://formspree.io/f/xdoqojdw" method="POST" id="contact-form">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="text" name="email" placeholder="Email" required />
            <textarea name="message" id='' rows="7" placeholder="Message" required></textarea>
            <button type="submit" class='btn btn-primary' onClick="sendMail();">Send Message</button>
        </form>
    </div>
</section>
  )
}

export default Contact