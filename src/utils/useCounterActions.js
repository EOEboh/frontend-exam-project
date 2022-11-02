import React, { useReducer, useState } from 'react'

const useCounterActions = () => {
    const initialState = { count: 0 }
    const [ state, dispatch ] = useReducer(reducer, initialState)


  function reducer(state, action ) {
    switch (action.type) {
        case 'increment':
            return { count: state.count +  1 }
        case 'decrement': 
            return { count: state.count - 1}
        case 'reset':
            return { count: state.count = 0 }
        default:
            return { count: state.count }
    }
  }
  return [ state, dispatch, reducer ]
}

export default useCounterActions
