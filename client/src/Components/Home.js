import React from 'react'

function Home() {
  return (
  <div id="cover">
  <form id='frm' >
    <div className="tb">
      <div className="td">
        <input id="type" type="text" placeholder="Search" required="" />
      </div>
      <div className="td" id="s-cover">
        <button id="bb" type="submit">
          <div id="s-circle" />
          <span />
        </button>
      </div>
    </div>
  </form>
</div>

  )
}

export default Home