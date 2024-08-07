

document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the class 'pdf-container'
    const pdfContainers = document.querySelectorAll('.pdf-container');
  
    // Function to convert PDF to image
    function convertPDFToImage(pdfUrl, container) {
      // Initialize the PDF.js library
      pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
        // Fetch the first page of the PDF
        pdf.getPage(1).then(page => {
          const viewport = page.getViewport({ scale: 1.0 });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
  
          canvas.height = viewport.height;
          canvas.width = viewport.width;
  
          const renderContext = {
            canvasContext: context,
            viewport: viewport
          };
  
          // Render the PDF page as an image on the canvas
          page.render(renderContext).promise.then(() => {
            // Convert the canvas to a data URL representing a PNG image
            const imgData = canvas.toDataURL('image/png');
            const imgElement = document.createElement('img');
  
            // Set the src attribute of the img element to display the image
            imgElement.src = imgData;
  
            // Append the image to the container
            container.appendChild(imgElement);
          });
        });
      });
    }
  
    // Loop through each PDF container and convert corresponding PDFs to images
    pdfContainers.forEach(container => {
      const pdfUrl = container.getAttribute('data-custom-attribute');
      convertPDFToImage(pdfUrl, container);
    });
  });


  
  