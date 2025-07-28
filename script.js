// Dark mode detection and toggle 
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Generate gallery images
        const generateGalleryImages = () => {
            const galleryContainer = document.getElementById('gallery-placeholder');
            const images = [
                { src: 'Photos/straight-back.jpeg', alt: 'Modern Straight Back' },
                { src: 'Photos/lemonade1.jpeg', alt: 'Long Lemonade Style' },
                { src: 'Photos/short-lemonade.jpeg', alt: 'Elegant Short Lemonade hairstyle' },
                { src: 'Photos/shhort-knotless.jpeg', alt: 'Short Knotless Braids' },
                { src: 'Photos/knotless.jpeg', alt: 'Long Knotless Braids' },
                { src: 'Photos/straight-up1.jpeg', alt: 'Elegant Modern Straight Up' },
                { src: 'Photos/straight-up2.jpeg', alt: 'Straight up style' },
                { src: 'Photos/tribal.jpeg', alt: 'Tribal Modern Braids' },
                { src: 'Photos/up.jpeg', alt: 'Straight UP' },
                { src: 'Photos/Twist.jpeg', alt: 'Twist' },
                { src: 'Photos/free-hand.jpg', alt: 'Free Hand' },
                { src: 'Photos/installation.jpg', alt: 'Weave Installation' },
                { src: 'Photos/castomized.jpeg', alt: 'Weave Customization' },
                { src: 'Photos/butterfly-lock.jpg', alt: 'Butterfly Locks' },
                { src: 'Photos/curlyTribal1.jpg', alt: 'Curly tribals' },
                { src: 'Photos/curlyTribal2.jpg', alt: 'Elegant curly Tribals' },
                { src: 'Photos/curlyTribal3.jpg', alt: 'Morden Curly Tribal' },
                { src: 'Photos/curlyUp.jpg', alt: 'Straight up with curly tail' },
                { src: 'Photos/Installation1.jpeg', alt: 'installation' },
                { src: 'Photos/Installation2.jpeg', alt: 'insatllation' },
                { src: 'Photos/Installation3.jpeg', alt: 'insatllation' },
                { src: 'Photos/knotlessss.jpg', alt: 'knotless  Braids ' },
                { src: 'Photos/Make-up1.jpg', alt: 'Make up' },
                { src: 'Photos/Make-up2.jpg', alt: 'make up' },
                { src: 'Photos/Make-up3.jpg', alt: 'Make up' },
                { src: 'Photos/Make-up4.jpg', alt: 'make  up' },
                { src: 'Photos/straight-back1.jpg', alt: 'Straighht back ' },
                { src: 'Photos/tribal1.jpg', alt: 'Tribal Braids' },
                { src: 'Photos/tribal2.jpg', alt: 'Tribal Braids' },
                { src: 'Photos/tribal3.jpg', alt: 'Tribal Braids' },
                { src: 'Photos/tribal4.jpg', alt: 'Morden Tribal Braids' },
                { src: 'Photos/tribal5.jpg', alt: 'Tribal Braids' },
                { src: 'Photos/tribal6.jpg', alt: 'Morden Tribal Braids' },
                { src: 'Photos/tribal7.jpg', alt: 'Morden Tribal Braids' },
                { src: 'Photos/tribal8.jpg', alt: 'Tribal Braids' },
                { src: 'Photos/tribal9.jpg', alt: 'Tribal Braids' },
                { src: 'Photos/up1.jpeg', alt: 'straigh up' },
                { src: 'Photos/up2.jpeg', alt: 'straight up ' },
                { src: 'Photos/twist2.jpg', alt: 'Elagent Twist' },
                { src: 'Photos/Godess.mp4', alt: 'Goddess Braids', type: 'video/mp4' },
                { src: 'Photos/goddess2.mp4', alt: 'Elegant Goddess Braids', type: 'video/mp4' },
                { src: 'Photos/installlll.jpg', alt: 'install' },
                { src: 'Photos/installlll2.jpg', alt: 'install' },
                { src: 'Photos/installlll3.jpg', alt: 'installation' },
                { src: 'Photos/side.jpg', alt: 'straight side ' },
                { src: 'Photos/trib.jpg', alt: 'tribal' },
                { src: 'Photos/uppp.jpg', alt: 'straight up' },
                { src: 'Photos/tribal1.mp4', alt: 'tribal Braids', type: 'video/mp4' },
                { src: 'Photos/tribal2.mp4', alt: 'tribal Braids', type: 'video/mp4' },
                { src: 'Photos/wash.mp4', alt: 'Hair Wash', type: 'video/mp4' }
            ];
            galleryContainer.innerHTML = '';
            images.forEach((item) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'rounded-lg overflow-hidden shadow-md aspect-square transition-all hover:shadow-lg cursor-pointer';
                if (item.type === 'video/mp4') {
                    const videoElement = document.createElement('video');
                    videoElement.src = item.src;
                    videoElement.alt = item.alt;
                    videoElement.className = 'w-full h-full object-cover';
                    videoElement.autoplay = true;
                    videoElement.loop = true;
                    videoElement.muted = true;
                    itemElement.appendChild(videoElement);
                } else {
                    const imgElement = document.createElement('img');
                    imgElement.src = item.src;
                    imgElement.alt = item.alt;
                    imgElement.className = 'w-full h-full object-cover';
                    imgElement.addEventListener('click', () => {
                        document.getElementById('lightbox-image').src = item.src;
                        document.getElementById('lightbox').style.display = 'flex';
                    });
                    itemElement.appendChild(imgElement);
                }
                galleryContainer.appendChild(itemElement);
            });
        };

// Close lightbox
document.getElementById('lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});

// Load gallery on page load
window.addEventListener('load', generateGalleryImages);

// Booking form logic
const bookingForm = document.getElementById('booking-form');
const bookingConfirmation = document.getElementById('booking-confirmation');
const closeBookingModal = document.getElementById('close-booking-modal');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    bookingConfirmation.classList.remove('hidden');
    bookingForm.reset();
});
closeBookingModal.addEventListener('click', () => {
    bookingConfirmation.classList.add('hidden');
});

// Contact form logic
const contactForm = document.getElementById('contact-form');
const contactConfirmation = document.getElementById('contact-confirmation');
const closeContactModal = document.getElementById('close-contact-modal');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactConfirmation.classList.remove('hidden');
    contactForm.reset();
});
closeContactModal.addEventListener('click', () => {
    contactConfirmation.classList.add('hidden');
});

// Minimum date for booking
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

//  Dynamic Booking Options Based on Service
document.addEventListener("DOMContentLoaded", function () {
    const serviceSelect = document.getElementById("service");
    const serviceOptionsDiv = document.getElementById("service-options");

    serviceSelect.addEventListener("change", function () {
        const selected = this.value;
        serviceOptionsDiv.innerHTML = "";

        if (selected === "braiding") {
  serviceOptionsDiv.innerHTML = `
    <div class="form-section mb-4">
      <label class="block font-medium mb-2">Choose Braid Style:</label>
      <label class="block"><input type="radio" name="braid-style" value="Straight Back"> Straight Back</label>
      <label class="block"><input type="radio" name="braid-style" value="Knotless"> Knotless</label>
      <label class="block"><input type="radio" name="braid-style" value="Goddess Braids"> Goddess Braids</label>
      <label class="block"><input type="radio" name="braid-style" value="Tribal Braids"> Tribal Braids</label>
      <label class="block"><input type="radio" name="braid-style" value="Lemonade Braids"> Lemonade Braids</label>
      <label class="block"><input type="radio" name="braid-style" value="Free Hand"> Free Hand</label>
      <label class="block"><input type="radio" name="braid-style" value="Twist Braids"> Twist Braids</label>
      <label class="block"><input type="radio" name="braid-style" value="Straight Up"> Straight Up</label>
      <label class="block"><input type="radio" name="braid-style" value="Straight Side"> Straight Side</label>
    </div>

    <div class="form-section mb-4">
      <label class="block font-medium mb-2">Which Length would you like?</label>
      <label class="block"><input type="radio" name="braid-length" value="Short"> Short</label>
      <label class="block"><input type="radio" name="braid-length" value="Medium"> Medium</label>
      <label class="block"><input type="radio" name="braid-length" value="Long"> Long</label>
    </div>

    <div class="form-section mb-4">
      <label class="block font-medium mb-2">With Curls?</label>
      <label class="block"><input type="radio" name="braid-curls" value="Yes"> Yes</label>
      <label class="block"><input type="radio" name="braid-curls" value="No"> No</label>
    </div>

    <div class="form-section mb-4">
      <label class="block font-medium mb-2">Which Braid Size would you like?</label>
      <label class="block"><input type="radio" name="braid-size" value="Small"> Small</label>
      <label class="block"><input type="radio" name="braid-size" value="Medium"> Medium</label>
      <label class="block"><input type="radio" name="braid-size" value="Thick"> Thick</label>
    </div>

    <div class="form-section mb-4">
      <label class="block font-medium mb-2">What is your Hair Type?</label>
      <label class="block"><input type="radio" name="hair-type" value="Afro"> Afro</label>
      <label class="block"><input type="radio" name="hair-type" value="Relaxed"> Relaxed</label>
    </div>
  `;
} else if (selected === "hairwash") {
  serviceOptionsDiv.innerHTML = `
    <div class="form-section">
      <label class="block font-medium mb-2">What is your Hair Type?</label>
      <label class="block"><input type="radio" name="wash-hair-type" value="Afro"> Afro</label>
      <label class="block"><input type="radio" name="wash-hair-type" value="Relaxed"> Relaxed</label>
      <label class="block"><input type="radio" name="wash-hair-type" value="Blow Out"> Blow Out</label>
    </div>
  `;
} else if (selected === "weaveinstallation") {
  serviceOptionsDiv.innerHTML = `
    <div class="form-section">
      <label class="block font-medium mb-2">Do you want it styled?</label>
      <label class="block"><input type="radio" name="weave-styled" value="Just Installation"> Just Installation</label>
      <label class="block"><input type="radio" name="weave-styled" value="Styled and styling"> Styled and Styling</label>
    </div>
  `;
} else if (selected === "makeup") {
  serviceOptionsDiv.innerHTML = `
    <div class="form-section">
      <label class="block font-medium mb-2">Choose Makeup Style:</label>
      <label class="block"><input type="radio" name="makeup-style" value="Natural look"> Natural</label>
      <label class="block"><input type="radio" name="makeup-style" value="Full Glamour"> Full Glamour</label>
      <label class="block"><input type="radio" name="makeup-style" value="Bridal Look"> Bridal</label>
    </div>
  `;
} else if (selected === "weavecustomization") {
  serviceOptionsDiv.innerHTML = `
    <div class="form-section">
      <label class="block font-medium mb-2">Weave Customization:</label>
      <label class="block"><input type="radio" name="weave-custom" value="Only Customizing"> Only Customizing</label>
      <label class="block"><input type="radio" name="weave-custom" value="Customization and Styling"> Customization with Styling</label>
    </div>
  `;
} else if (selected === "eyelashes") {
  serviceOptionsDiv.innerHTML = `
    <div class="form-section">
      <label class="block font-medium mb-2">Choose Eyelash Style:</label>
      <label class="block"><input type="radio" name="eyelash-style" value="Natural"> Natural – Light and subtle</label>
      <label class="block"><input type="radio" name="eyelash-style" value="Volume"> Volume – Full and bold</label>
      <label class="block"><input type="radio" name="eyelash-style" value="Hybrid"> Hybrid – Mix of natural and volume</label>
      <label class="block"><input type="radio" name="eyelash-style" value="Wispy"> Wispy – Spiky & fluttery look</label>
      <label class="block"><input type="radio" name="eyelash-style" value="Cat Eye"> Cat Eye – Flared & winged out</label>
    </div>
  `;
} else {
  alert("Please choose a valid service");
}

    
    });
});
