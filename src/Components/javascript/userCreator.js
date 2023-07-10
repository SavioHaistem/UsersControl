const getAleatorId =()=> {
  let aleatorId = Math.floor(Math.random() * 1000).toString().padStart(5, "0");
  return Number(aleatorId);
}

function newUser(name, email) {
  this.id = getAleatorId
  this.name = name;
  this.email = email;
};

export default newUser