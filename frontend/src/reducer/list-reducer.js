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
        return list._id !== payload._id;
      })

    case 'LIST_UPDATE':
      return state.map( list => {
        return list._id === payload._id ? payload : list;
      })

    default: return state;
  }

}