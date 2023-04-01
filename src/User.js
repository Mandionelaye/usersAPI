import React from 'react'

export default function User({nom, username, email, address}) {
  return (
       <tr>
         <td className="table-info" height="10%">{nom}</td>
         <td className="table-light" height="10%">{username}</td>
         <td className="table-success" height="10%">{email}</td>
         <td className="table-warning" height="10%">{address}</td>
       </tr>
  )
}
