const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK_LIST = 'bookStore/books/GET_BOOK_LIST';

const initialState = [];

const addBookToAPI = async (book) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/eTfxKsR9wf3ubgm9W4xT/books', {
    method: 'POST',
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      category: book.category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const deleteBookfromAPI = async (book) => {
  const id = book.item_id;
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/eTfxKsR9wf3ubgm9W4xT/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      id,
    }),
  });
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getList = (payload) => ({
  type: GET_BOOK_LIST,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      addBookToAPI(action.payload);
      return [...state, action.payload];
    case REMOVE_BOOK:
      deleteBookfromAPI(action.payload);
      return state.filter((book) => book.item_id !== action.payload.item_id);
    case GET_BOOK_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
