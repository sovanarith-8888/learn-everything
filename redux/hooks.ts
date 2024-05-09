import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()// for action
export const useAppSelector = useSelector.withTypes<RootState>()//for display data
export const useAppStore = useStore.withTypes<AppStore>()