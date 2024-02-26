// class Product {
//     constructor(id, name, description, image, price) {
//       this.id = id;
//       this.name = name;
//       this.description = description;
//       this.image = image;
//       this.price = price;
//     }
//   }
  
const packagesData = [
    {
      id:"1",
      destination: "Токио",
      description: "Технологийн хөгжлийн хотод зочлоорой.",
      price: "₮5,300,000",
      image: "../images/japanMain.jpg"
    },
    {
      id:"2",
      destination: "Миами",
      description: "Үзэгслэнт далайн эргээр аялахыг хүсвэл захиалаарай.",
      price: "₮5,300,000",
      image: "../images/miamiMain.png"
    },
    {
      id:"3",
      destination: "Банкгог",
      description: "Үзэгслэнт Банкгог хотын аялал дурсамж дүүрэн байх болно.",
      price: "₮5,300,000",
      image: "../images/bangkokmain.jpg"
    },
    {
      id:"4",
      destination: "Токио",
      description: "Технологийн хөгжлийн хотод зочлоорой.",
      price: "₮5,300,000",
      image: "../images/japanMain.jpg"
    },
    {
      id:"5",
      destination: "Миами",
      description: "Үзэгслэнт далайн эргээр аялахыг хүсвэл захиалаарай.",
      price: "₮5,300,000",
      image: "../images/miamiMain.png"
    },
    {
      id:"6",
      destination: "Банкгог",
      description: "Үзэгслэнт Банкгог хотын аялал дурсамж дүүрэн байх болно.",
      price: "₮5,300,000",
      image: "../images/bangkokmain.jpg"
    },
    {
      id:"7",
      destination: "Токио",
      description: "Технологийн хөгжлийн хотод зочлоорой.",
      price: "₮5,300,000",
      image: "../images/japanMain.jpg"
    },
    {
      id:"8",
      destination: "Миами",
      description: "Үзэгслэнт далайн эргээр аялахыг хүсвэл захиалаарай.",
      price: "₮5,300,000",
      image: "../images/miamiMain.png"
    },
    {
      id:"9",
      destination: "Токио",
      description: "Технологийн хөгжлийн хотод зочлоорой.",
      price: "₮5,300,000",
      image: "../images/japanMain.jpg"
    },
    {
      id:"10",
      destination: "Миами",
      description: "Үзэгслэнт далайн эргээр аялахыг хүсвэл захиалаарай.",
      price: "₮5,300,000",
      image: "../images/miamiMain.png"
    },
  ];

  // package--iin html iig generate hiih inner html function
  function generatePackageHTML(package) {
    return `
      <div class="card">
        <img src="${package.image}" alt="${package.destination}" width="140px" height="70px">
        <div class="card-body">
          <h3>${package.destination}</h3>
          <p>${package.description}</p>
          <h5>${package.price} <span><button>Захиалах</button></span></h5>
        </div>
      </div>
    `;
  }
  
  fetch('../packages.json')
    .then(response => response.json())
    .then(data => {
      console.log(data); 
    })
    .catch(error => console.error('aldaa1: ', error));
  
  
  function renderPackages() {
    const packagesContainer = document.querySelector('.packages .row'); 
    if (packagesContainer) {
      packagesData.forEach(package => {
        const packageHTML = generatePackageHTML(package);
        packagesContainer.insertAdjacentHTML('beforeend', packageHTML);
      });
    }
  }
  
  renderPackages();