import uuid from 'uuid/v4';
import superagent from 'superagent';

/********************************************************************************
*         synchronous                                                           *
********************************************************************************/
export const listSet = lists => {

  return {
    type: "LIST_SET",
    payload: lists,
  }
}

export const listCreate = list => {
  list.id = uuid();

  return {
    type: "LIST_CREATE",
    payload: list,
  }
};

export const listUpdate = list => {
  return {
    type: "LIST_UPDATE",
    payload: list,
  }
}

export const listDestroy = list => {
  return {
    type: "LIST_DESTROY",
    payload: list,
  }
}

/********************************************************************************
*        Asynchronous                                                           *
********************************************************************************/

export const listCreateRequest = list => dispatch => {
  return superagent.post(`${__API_URL__}/api/lists`)
    .send(list)
    .then(res => {
      dispatch(listCreate(res.body));
      return res;
    })
    .catch(console.error);
}

export const listDestroyRequest = list => dispatch => {
  return superagent.delete(`${__API_URL__}/api/lists/${list._id}`)
  .then(res => {
    dispatch(listDestroy(list))
    return res;
  })
  .catch(console.error);
}

export const listUpdateRequest = list => dispatch => {
  console.log(list);
  return superagent.put(`${__API_URL__}/api/lists/${list._id}`)
    .send(list)
    .then(res => {
      dispatch(listUpdate(list))
      return res;
    })
    .catch(console.error)
}

export const listsFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/lists`)
    .then(res => {
      dispatch(listSet(res.body));
      return res;
    })
    .catch (console.error);
}
