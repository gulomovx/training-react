import React from 'react'
import { Outlet } from 'react-router-dom'

function RecipeLayout() {
  return (
      <div>
          
          <hr />
          <Outlet/>
    </div>
  )
}

export default RecipeLayout