import uuid from 'uuid/v4';

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

