interface Iuser {
  name: string;
  email: string;
}

function getAleatorId():number {
  let id = Math.floor(Math.random() * 1000).toString().padStart(9,'0');
  return Number(id)
}

function useUser({name, email}:Iuser) {
  let userId = getAleatorId()
  return { userId, name, email }
}

export default useUser