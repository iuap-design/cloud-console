import React from 'react'

// const MACHINE_INC = "MACHINE_INC"

export default (list={ listNumber: 0}, action) => {

  let num = list.listNumber

  switch (action.type) {
    case "MACHINE_INC":
        return { listNumber: num + 1 }
        break;
    case "MACHINE_DEC":
        return { listNumber: num - 1 }
        break;
      default:
        return { listNumber: num }
  }
}

// export default List
