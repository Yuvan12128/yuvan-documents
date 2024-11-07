function Contact(){
    return(
        <>
        <div className="contact-container" id='contact'>
            <div className="contact-box">
                <h1><i class="fa-solid fa-address-book"></i> Contact</h1>
                <br />
                <p><i class="fa-solid fa-mobile-screen-button"></i> Phone : 9025809490</p>
                <p><i class="fa-regular fa-envelope"></i> Email : kavyaammu496@gmail.com</p>
               
               <div className="so-container">
               <div className="face-book">
                <a href="https://www.facebook.com/profile.php?id=61553407097379"><i class="fa-brands fa-square-facebook"></i></a>
                </div>
                <div className="insta">
                    <a href="https://www.instagram.com/kavyuva/"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div className="wa">
                    <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                </div>
               </div>
              
            </div>
           
        </div>
        </>
    )
}
export default Contact;