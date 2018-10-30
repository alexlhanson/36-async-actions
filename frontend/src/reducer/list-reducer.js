let initialState = [];

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch (type) {

    case 'LIST_SET':
      return payload;

    case 'LIST_CREATE':
      return [...state, payload]

    case 'LIST_DESTROY':
      return state.filter(list => {
        return list.id !== payload.id;
      })

    case 'LIST_UPDATE':
      return state.map( list => {
        if (list.id === payload.id){
          return payload;
        } else {return list}
      })

    default: return state;
  }

}