console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    // Fetch and display dog images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching images:', error));
  
    // Fetch and display dog breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById('dog-breeds');
        Object.keys(data.message).forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          breedList.appendChild(li);
        });
  
        // Add click event listener to change color
        breedList.addEventListener('click', (event) => {
          if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; // Change to your desired color
          }
        });
      })
      .catch(error => console.error('Error fetching breeds:', error));
  
    // Filter breeds by first letter
    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', (event) => {
      const selectedLetter = event.target.value;
      const allBreeds = document.querySelectorAll('#dog-breeds li');
      
      allBreeds.forEach(li => {
        if (li.textContent.startsWith(selectedLetter)) {
          li.style.display = '';
        } else {
          li.style.display = 'none';
        }
      });
    });
  });
  