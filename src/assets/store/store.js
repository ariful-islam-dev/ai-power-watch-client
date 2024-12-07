import { configureStore } from '@reduxjs/toolkit'
import { authReducer} from '../reducer/authReducer'
import { dataReducer } from '../reducer/dataReducer'
import { pathReducer } from '../reducer/pathReducer'

export const store = configureStore({
  reducer: {
    path: pathReducer.reducer,
    auth: authReducer.reducer,
    data: dataReducer.reducer
  },
  
})