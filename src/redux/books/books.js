const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK_LIST = 'bookStore/books/GET_BOOK_LIST';

const initialState = [];

const addBookToAPI = async (book) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/eTfxKsR9wf3ubgm9W4xT/books', {
    method: 'POST',
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      category: book.category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => console.log('added'));
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
      return state.filter((book) => book.id !== action.payload.id);
    case GET_BOOK_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
