import { CHOOSE_SEX, INCREMENT_SEX, DECREMENT_SEX } from "../actions/actions"

const initialState = [
  {
    sex: "M",
    selected: false,
    count: 0,
    image:
      "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1650&q=80"
  },
  {
    sex: "F",
    selected: false,
    count: 0,
    image:
      "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f5bb4869d80176df6b68e5f160b1c76&auto=format&fit=crop&w=1834&q=80"
  }
]

const genders = (prevState = initialState, action) => {
  //  déclaration d'une fonction qui prend en parametre prevstate qui est égal a initalstate / action
  if (action.type === CHOOSE_SEX) {
    // si le type de action est égal a choose_sex (c'est un teste)
    return prevState.map(sexObject => ({
      // je retourne le prevstate et  parcour element par element qui prend en parametre sexObjet
      ...sexObject,
      // je décompose l'objet sexObjet
      selected: action.sex === sexObject.sex
      // dans la proprietée selected je compare le parametre sex de mon action à la proprieté sex de mon objet sexObjet
    }))
  }
  if (action.type === INCREMENT_SEX) {
    return prevState.map(sexObject => ({
      ...sexObject,
      count:
        action.sex === sexObject.sex ? sexObject.count + 1 : sexObject.count
      // la propriete count incremente de 1 la valeur de count si action.sex === sexObject.sex
      // sinon il renvoie la valeur de sexObjet par defaut
    }))
  }
  if (action.type === DECREMENT_SEX) {
    return prevState.map(sexObject => ({
      ...sexObject,
      count:
        action.sex === sexObject.sex ? sexObject.count - 1 : sexObject.count
      // la propriete count decremente de 1 la valeur de count si action.sex === sexObject.sex
      // sinon il renvoie la valeur de sexObjet par defaut
    }))
  }
  return prevState
  // sinon je retourne  prevstate
}

export default genders
