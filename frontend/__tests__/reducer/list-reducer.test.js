import listReducer from '../../src/reducer/list-reducer';

describe('listReducer', () => {

  test('should show that no action causes initial state return', () => {
    let mockAction = {
      type: '',
      payload: 'payload',
    }
    let actual = listReducer([], mockAction);
    expect(actual).toEqual([]);
  });

  test('should show that LIST_SET action returns a payload it recieves', () => {
    let mockAction = {
      type: 'LIST_SET',
      payload: 'payload',
    }
    let actual = listReducer([], mockAction);
    expect(actual).toBe('payload');
  });

  test('should show that LIST_CREATE action returns array with payload', () => {
    let mockAction = {
      type: 'LIST_CREATE',
      payload: 'payload',
    }
    let actual = listReducer([], mockAction);
    expect(actual[0]).toBe('payload');
  });

  test('should show that LIST_UPDATE action returns update of state', () => {
    let mockState = [
      {
        title: "mockTitle",
        id: "mockId",
      }
    ]
    let mockAction = {
      type: 'LIST_UPDATE',
      payload: {
        title: "mockTitle2",
        id: "mockId",
      },
    }
    let actual = listReducer(mockState, mockAction);
    expect(actual[0].title).toBe('mockTitle2');
  });

  test('should show that LIST_UPDATE action returns original state if no matching id', () => {
    let mockState = [
      {
        title: "mockTitle",
        id: "mockId",
      }
    ]
    let mockAction = {
      type: 'LIST_UPDATE',
      payload: {
        title: "mockTitle2",
        id: "mockId2",
      },
    }
    let actual = listReducer(mockState, mockAction);
    expect(actual[0].title).toBe('mockTitle');
  });

  test('should show that LIST_DESTROY action removes mock item from state', () => {
    let mockState = [
      {
        title: "mockTitle",
        id: "mockId",
      }
    ]
    let mockAction = {
      type: 'LIST_DESTROY',
      payload: {
        title: "mockTitle",
        id: "mockId",
      },
    }
    let actual = listReducer(mockState, mockAction);
    expect(actual).toEqual([]);
  });

  test('should show that LIST_DESTROY action does nothing if id in state not the same as payload', () => {
    let mockState = [
      {
        title: "mockTitle",
        id: "mockId",
      }
    ]
    let mockAction = {
      type: 'LIST_DESTROY',
      payload: {
        title: "mockTitle",
        id: "mockId v2",
      },
    }
    let actual = listReducer(mockState, mockAction);
    expect(actual).toEqual(mockState);
  });

  

});