import Vue from "vue"

/* Lives*/


export const getLives = (state) => {
  console.log('getting lives from state ', state); //eslint-disable-line
  return state.lives
}
