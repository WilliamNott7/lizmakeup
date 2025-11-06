
document.addEventListener('DOMContentLoaded', function() {
// Animação de contagem dos números
function animateNumbers() {
    const counters = document.querySelectorAll('.proof-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateNumbers(), 1);
        } else {
            counter.innerText = target + '+';
        }
    });
}

// Observador de interseção
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(animateNumbers, 500);
        }
    });
});

observer.observe(document.querySelector('.social-proof-section'));

// Animações de entrada suave
function animateOnScroll() {
    const elements = document.querySelectorAll('.proof-card, .testimonial-card');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.animation = `countUp 0.6s ease forwards ${index * 0.1}s`;
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();
});








 const text = "Olá! Seja bem-vindo(a) ao meu espaço digital. Aqui você encontra tudo reunido em um só lugar minhas redes sociais, fotos favoritas, conteúdos que me representam e um pouquinho da minha essência. Este mini site foi criado para facilitar a forma como me conecto com pessoas incríveis como você. Se gostou do meu conteúdo, sinta-se à vontade para explorar e acompanhar mais de perto o que compartilho. Para divulgação ou parcerias, clique no botão abaixo.";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();


