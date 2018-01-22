const API_ROOT = `http://localhost:3000/api/v1`;

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

const getCocktails = () => {
  return fetch(`${API_ROOT}/cocktails`)
  .then(resp => resp.json())
}

const getIngredients = () => {
  return fetch(`${API_ROOT}/ingredients`)
  .then(resp => resp.json())
}

const getUsers = () => {
  return fetch(`${API_ROOT}/users`)
  .then(resp => resp.json())
}

const createUser = (fields) => {
  return fetch(`${API_ROOT}/users`,{
    method: 'POST',
    body: JSON.stringify(fields),
    headers,
  }).then(resp => resp.json())
}

const showDrink = (id) => {
  return fetch(`${API_ROOT}/cocktails/${id}`)
    .then(resp => resp.json())
}

const createNewCocktail = (fields) => {
  return fetch(`${API_ROOT}/cocktails`, {
    method: 'POST',
    body: JSON.stringify(fields),
    headers,
  }).then(resp => resp.json())
}

export default{
  apiData: {
    getCocktails,
    getIngredients,
    getUsers,
    createUser,
    showDrink,
    createNewCocktail
  }
}