import constants from '../constants/AppConstants.js'
import dispatcher from '../dispatcher/AppDispatcher.js'

export let incrementActions = {
  incrementCount: () => {
    dispatcher.dispatch({
      actionType: constants.INCREMENT
    })
  }
}