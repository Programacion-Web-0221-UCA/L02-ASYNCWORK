//Variables
let users = [];

// Render functions 
const renderElement = ({id, image: src, username, email, gender, fullname, country}) => {
  return `
        <li class="card" data-id="${id}">
            <div class="card-main">
                <figure>
                    <img src="${src}" alt="Avatar ${username}" loading="lazy">
                </figure>
                <h2 class="card-main-fullname">${fullname}</h2>
                <p class="card-main-email">${email}</p>
                <p class="card-main-username">${username}</p>
                <p class="card-main-gender">${gender}</p>
            </div>
            <div class="card-footer">
                <h3 class="card-footer-country">${country}</h3>
            </div>
        </li>
  `
}

const renderList = ({ }) => {
  
}

//Fetch functions
const fetchData = async (url) => {
  let data = undefined;
  
  try {
    const response = await fetch(url);
    
    if(response.ok) {
      data = await response.json();
    } else {
      console.warn("invalid request")
    }
  } catch(error) {
    console.error({ error });
    console.error("Error in fetch data");
  } finally {
    return data;
  }
}

const fetchUsers = async () => {
  users = await fetchData("/data/human_500.json") ?? [];
}

const App = () => {
    fetchUsers();
}

window.onload = App; 