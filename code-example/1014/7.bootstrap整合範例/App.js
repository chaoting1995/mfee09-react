import React, { useState, useEffect } from 'react'

function App() {
  return (
    <>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>

     
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropup
  </button>
  <div class="dropdown-menu">

  </div>
</div>
    </>
  )
}

export default App
