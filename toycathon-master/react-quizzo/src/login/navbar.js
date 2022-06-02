import React from 'react'

export default function navbar() {
  return (
    <nav classname="navbar navbar-light" style="backkground-color: #e3f453">
  <div classname="container-fluid">
    <a classname="navbar-brand">Navbar</a>
    <form classname="d-flex">
      <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button classnamename="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}


