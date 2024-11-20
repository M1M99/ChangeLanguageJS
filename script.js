// Bu saytdaki kimi sehifenin iki dile tercumesini reallashdirmaq lazimdir. Yuxaridaki url uygun olaraq sehife yenilenende querisde(url sonu) olan deyere gore hemen dile sehife tercume olmalidir. TAGLER ARTIQ HAZIR OLMALIDIR!
const englishData = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Engineer",
    company: "TechCorp",
    phone: "+1 555 1234",
    email: "john.doe@example.com",
    address: "123 Elm St",
    education: "Bachelor's Degree",
    hobby: "Photography",
    favorite_food: "Pizza",
    favorite_color: "Blue",
    favorite_movie: "Inception",
    favorite_book: "1984",
    language: "English",
    nationality: "American",
    marital_status: "Single",
    has_pets: true,
    children: 0,
    car: "Tesla Model S"
};

const russianData = {
    name: "Джон",
    age: 30,
    city: "Нью-Йорк",
    occupation: "Инженер",
    company: "ТехКорп",
    phone: "+1 555 1234",
    email: "john.doe@пример.com",
    address: "ул. Эльм, 123",
    education: "Степень бакалавра",
    hobby: "Фотография",
    favorite_food: "Пицца",
    favorite_color: "Синий",
    favorite_movie: "Начало",
    favorite_book: "1984",
    language: "Английский",
    nationality: "Американец",
    marital_status: "Не женат",
    has_pets: true,
    children: 0,
    car: "Тесла Модель S"
};
window.onload = function() {
    let lang = new URLSearchParams(window.location.search).get('lang') || 'eng';
    let selectedData = lang === 'ru' ? russianData : englishData;

    displayData(selectedData, lang);

    document.getElementById('lang').addEventListener('change', function(event) {
      let newLang = event.target.value;
      let newUrl = `${window.location.pathname}?lang=${newLang}`;
      window.history.pushState({path: newUrl }, '', newUrl);
      
      let newData = newLang === 'ru' ? russianData : englishData;
      displayData(newData, newLang);
    });
  };

  function displayData(data, lang) {
    const hasPets = lang === 'ru' ? (data.has_pets ? 'Да' : 'Нет') : (data.has_pets ? 'Yes' : 'No');

    let output = `
      <ul>
        <li><strong>Name:</strong> ${data.name}</li>
        <li><strong>Age:</strong> ${data.age}</li>
        <li><strong>City:</strong> ${data.city}</li>
        <li><strong>Occupation:</strong> ${data.occupation}</li>
        <li><strong>Company:</strong> ${data.company}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Address:</strong> ${data.address}</li>
        <li><strong>Education:</strong> ${data.education}</li>
        <li><strong>Hobby:</strong> ${data.hobby}</li>
        <li><strong>Favorite Food:</strong> ${data.favorite_food}</li>
        <li><strong>Favorite Color:</strong> ${data.favorite_color}</li>
        <li><strong>Favorite Movie:</strong> ${data.favorite_movie}</li>
        <li><strong>Favorite Book:</strong> ${data.favorite_book}</li>
        <li><strong>Language:</strong> ${data.language}</li>
        <li><strong>Nationality:</strong> ${data.nationality}</li>
        <li><strong>Marital Status:</strong> ${data.marital_status}</li>
        <li><strong>Has Pets:</strong> ${hasPets}</li>
        <li><strong>Children:</strong> ${data.children}</li>
        <li><strong>Car:</strong> ${data.car}</li>
      </ul>
    `;
    document.getElementById('dataContainer').innerHTML = output;
  }