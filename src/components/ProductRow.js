import React from 'react'

function ProductRow({Product}) {

    const name= Product? Product:<span style={{color:"red"}}>{Product}</span>
  return (
    <table>

        <tr>  
            <td>
                Mango
            </td>
            <td>
               $100
            </td>
        </tr>
        <tr>
            <td>
                Apple
            </td>
            <td>
               $100
            </td>
        </tr>
        <tr>
            <td>
                Orange
            </td>
            <td>
               $100
            </td>
        </tr>
       
    </table>
  )
}

export default ProductRow