import React  from 'react'

export default function Layout({children}) {
  return (
    <div>
      <form action="/weather" method="get">
        City: <input type="text" name='city' />
        <input type="submit" value='Fetch weather data' />
      </form>
      {children}
    </div>
  )
}
