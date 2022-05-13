// import { bindActionCreators } from "redux";

 export function fetchCats() {
   return function (dispatch) {
    dispatch({type: "cats/catsLoading"});
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "cats/catsLoaded", payload: data.images });
      })
   }
}

const initialState = {
    entities: [],    //arr of cats
    status: "idle",  //loading state
  }

export default function catsReducer( state=initialState, action ) {
  switch (action.type) {
    case "cats/catsLoading":
      return {
        ...state,
        status: "loading",
      };
      case "cats/catsLoaded":
        return {
          ...state,
          entities: action.payload,
          status: "idle"
        };
        default: 
        return state;
    }
  }

// 1. The word “async” before a function means one simple thing: a function always returns a promise. 
// 2. The keyword "await" makes JavaScript wait until that promise settles and returns its result.