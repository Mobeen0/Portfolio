import './styleSheet/contactMe.css';

function ContactMe() {
  return (
    <main class="cd__main">
         <section>
        <div class="section-header">
        <div class="containerContact">
            <h2>Contact Me</h2>
            <p>Have a question or need assistance? Feel free to reach out to me anytime, and I'll be happy to help. I'm available to respond to your queries 24/7.</p>
        </div>
        </div>
        
        <div class="containerContact">
        <div class="row">
            
            <div class="contact-info">
            <div class="contact-info-item">
                <div class="contact-info-icon">
                <i class="fas fa-home"></i>
                </div>
                
                <div class="contact-info-content">
                <h4>Address</h4>
                <p>Islamabad, Pakistan</p>
                </div>
            </div>
            
            <div class="contact-info-item">
                <div class="contact-info-icon">
                <i class="fas fa-phone"></i>
                </div>
                
                <div class="contact-info-content">
                <h4>Phone</h4>
                <p>+92 311-850-7587</p>
                </div>
            </div>
            
            <div class="contact-info-item">
                <div class="contact-info-icon">
                <i class="fas fa-envelope"></i>
                </div>
                
                <div class="contact-info-content">
                <h4>Email</h4>
                <p>muhammad.mobeen100@gmail.com</p>
                </div>
            </div>
            </div>
            
            <div class="contact-form">
            <form action="" id="contact-form">
                <h2>Send Message</h2>
                <div class="input-box">
                <input type="text" required="true" name="" />
                <span>Full Name</span>
                </div>
                
                <div class="input-box">
                <input type="email" required="true" name="" />
                <span>Email</span>
                </div>
                
                <div class="input-box">
                <textarea required="true" name=""></textarea>
                <span>Type your Message...</span>
                </div>
                
                <div class="input-box">
                <input type="submit" value="Send" name="" />
                </div>
            </form>
            </div>
            
        </div>
        </div>
        </section>
        </main>
  )
}

export default ContactMe