import { combineReducers } from 'redux';
import destinationsReducer from './destinations/destinationsReducer';
import hotelsReducer from './hotels/hotelsReducer';
import favoritesReducer from './favorites/favoritesReducer';

const rootReducer = combineReducers({
  destinations: destinationsReducer,
  hotels: hotelsReducer,
  favorites: favoritesReducer,
});

export default rootReducer;