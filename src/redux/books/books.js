const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      addBookToAPI(action.payload);
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
