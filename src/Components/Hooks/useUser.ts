const getAleatorId: any =()=> {
  let aleatorId = Math.floor(Math.random() * 1000).toString().padStart(5, "0");
  console.log(Number(aleatorId));
  return Number(aleatorId);
}

class createUser { 
  name: string;
  email: string;
  id: number;

  constructor(name:string, email:string) {
    this.name = name;
    this.email = email;
    this.id = getAleatorId();
  }
}

const NewUser = new createUser('OceanGate','bilios.burricos');

export default NewUser;