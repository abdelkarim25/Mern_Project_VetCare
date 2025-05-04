import './contenu1.css';



export default function Welcome() {
    return (
        <>
            <div className="contenu">
                <div className="contenu-h1">
                <br /><br /><br />
                <b>
                    <h1 className="h1-welcom">
                      
                        Welcome To Vet Haven
                    </h1>
                </b>
                <br /><br /><br />
                </div>
                <br /><br /><br />
                <div>
                    <p className='paragraf'>
                        You can now schedule your pet's vet appointement with just one click
                    </p>
                </div>
                <br /><br /><br />
                <div className="div-btn">
                    <button class="swipe-button">Bring joy to your furry friends with Vet Haven </button>
                    </div>

                    <section class="container py-5" id="about">
  <div class="row align-items-center">
    <div class="col-md-6">
      <h2 class="section-title" className='paragraf'>About Vet Haven</h2>
      <p>
At Vet Haven, we bring together advanced veterinary care and heartfelt compassion to create a sanctuary for pets and their families. Our dedicated team of professionals ensures that every animal receives personalized attention in a calm, modern setting designed to put both pets and their owners at ease.

With cutting-edge facilities and a focus on reducing stress, we prioritize the physical health and emotional well-being of every furry friend. We understand the deep bond between pets and their families, offering more than just medical care – we provide trust, comfort, and a place where your pet’s happiness and health come first.

Vet Haven is where innovation meets care, making it the perfect choice for pet parents who want the very best for their beloved companions.</p>
    </div>
    <div class="col-md-6">
    <img 
  src="/images/photo-1558788353-f76d92427f16.jpg" 
  alt="Veterinary clinic" 
  className="img-fluid rounded shadow"
  style={{ 
    width: '550px',
    height: 'auto',
    maxWidth: '100%'
  }}
/>
    </div>
  </div>
</section>

                    <section class="py-5 bg-light" id="services">
  <div class="container">
    <h2 class="section-title text-center text-success">Our Services</h2>
    <div class="row g-4">
      <div class="col-md-4 text-center">
        <div class="p-4 border rounded shadow-sm success">
          <i class="bi bi-heart-pulse service-icon text-success"></i>
          <h5 class="mt-3">Preventive Care</h5>
          <p>Regular exams, vaccinations, and parasite prevention to keep your pets healthy.</p>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <div class="p-4 border rounded shadow-sm">
          <i class="bi bi-activity service-icon text-success"></i>
          <h5 class="mt-3">Surgery</h5>
          <p>From routine spay/neuter procedures to advanced orthopedic surgeries.</p>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <div class="p-4 border rounded shadow-sm">
          <i class="bi bi-house-heart service-icon text-success"></i>
          <h5 class="mt-3">Emergency Care</h5>
          <p>24/7 emergency support when you need us the most for urgent pet care.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="container py-5" id="team">
  <div className="text-center mb-5">
    <h2 className="section-title display-5 fw-bold text-success">Meet Our Team</h2>
    <p className="lead text-muted">Dedicated professionals caring for your pets</p>
  </div>
  
  <div className="row g-4 justify-content-center">
    {/* Team Member 1 */}
    <div className="col-md-4 col-lg-3">
      <div className="card h-100 border-0 shadow-sm text-center p-4">
        <div className="avatar mx-auto mb-3 rounded-circle overflow-hidden" style={{width: '120px', height: '120px'}}>
          <img 
            src="/images/vet1.jpeg" 
            alt="Dr. Emily Carter" 
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <h5 className="fw-bold">Dr. Emily Carter</h5>
        <p className="text-muted mb-0">Dental Care</p>
      </div>
    </div>

    
    <div className="col-md-4 col-lg-3">
      <div className="card h-100 border-0 shadow-sm text-center p-4">
        <div className="avatar mx-auto mb-3 rounded-circle overflow-hidden" style={{width: '120px', height: '120px'}}>
        <img 
  src="/images/vet2.jpg" 
  alt="Dr. Emily Carter" 
  className="w-100 h-100 object-fit-cover"
  
/>
        </div>
        <h5 className="fw-bold">Dr. Michael Lee</h5>
        <p className="text-muted mb-0">Nutritional Counseling</p>
      </div>
    </div>

    
    <div className="col-md-4 col-lg-3">
      <div className="card h-100 border-0 shadow-sm text-center p-4">
        <div className="avatar mx-auto mb-3 rounded-circle overflow-hidden" style={{width: '120px', height: '120px'}}>
          <img 
            src="/images/vet3.jpg" 
            alt="Sarah Thompson" 
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <h5 className="fw-bold">Sarah Thompson</h5>
        <p className="text-muted mb-0">Diagnostics (imaging and laboratory)</p>
      </div>
    </div>

    
    <div className="col-md-4 col-lg-3">
      <div className="card h-100 border-0 shadow-sm text-center p-4">
        <div className="avatar mx-auto mb-3 rounded-circle overflow-hidden" style={{width: '120px', height: '120px'}}>
          <img 
            src="/images/vet4.jpg" 
            alt="Sophia Fisher" 
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <h5 className="fw-bold">Sophia Fisher</h5>
        <p className="text-muted mb-0">Preventive Medicine and Vaccination</p>
      </div>
    </div>

    
    <div className="col-md-4 col-lg-3">
      <div className="card h-100 border-0 shadow-sm text-center p-4">
        <div className="avatar mx-auto mb-3 rounded-circle overflow-hidden" style={{width: '120px', height: '120px'}}>
          <img 
            src="/images/vet5.jpg" 
            alt="David Johnson" 
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <h5 className="fw-bold">David Johnson</h5>
        <p className="text-muted mb-0">Internal Medicine (general)</p>
      </div>
    </div>

    
    <div className="col-md-4 col-lg-3">
      <div className="card h-100 border-0 shadow-sm text-center p-4">
        <div className="avatar mx-auto mb-3 rounded-circle overflow-hidden" style={{width: '120px', height: '120px'}}>
          <img 
            src="/images/vet6.jpg" 
            alt="Karim Ahmed" 
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <h5 className="fw-bold">Karim Ahmed</h5>
        <p className="text-muted mb-0">General Surgery</p>
      </div>
    </div>
  </div>
</section>

<section className="py-5" id="location">
  <div className="container text-center">
    <h2 className="section-title mb-4 display-5 fw-bold text-success">Our Location</h2>
    <p className="mb-4 lead">Visit us at our clinic! We are located in the heart of the Nador city to serve you better.</p>
    <div className="ratio ratio-16x9 shadow-lg rounded-3 overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12345.6789!2d-2.924507!3d35.174285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEwJzI3LjQiTiAywrA1NSczNi4yIlc!5e0!3m2!1sen!2sus!4v1234567890123"
        title="Clinic Location"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      >
      </iframe>
    </div>
  </div>
</section>

            </div>
           <br /><br /><br />
        </>
    );

}