// Animate skill bars on scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
      const barTop = bar.getBoundingClientRect().top;
      const winHeight = window.innerHeight;
      if (barTop < winHeight - 100) {
        bar.style.width = bar.getAttribute('data-percent');
      }
    });
  });
  
  // Scroll to top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };
  
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Optional: Simple form validation
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for reaching out!");
  });
  