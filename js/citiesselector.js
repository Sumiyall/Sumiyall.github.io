function populateCities(selectElementId, jsonFilePath) {
    fetch(jsonFilePath)
      .then(response => response.json())
      .then(data => {
        const selectElement = document.getElementById(selectElementId);
        
        data.forEach(city => {
          const option = document.createElement('option');
          option.value = city.name;
          option.textContent = city.name;
          selectElement.appendChild(option);
        });
      })
      .catch(error => console.error('aldaa1:', error));
  }