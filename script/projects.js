 // JavaScript to handle mouse hover effect
document.addEventListener("DOMContentLoaded", function() {
    const certificates = document.querySelectorAll('.project');
    certificates.forEach(certificate => {
      certificate.addEventListener('mouseover', function() {
        // Add overlay effect on mouseout
        this.classList.add('overlay');
      });
      
      certificate.addEventListener('mouseout', function() {
        // Remove overlay effect on mouseover
        this.classList.remove('overlay');
      });
    });
  });