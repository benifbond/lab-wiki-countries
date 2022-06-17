import React from 'react'





function CountriesList(props) {
 

   

  return (
    
<div> 

{ props.country.map((element) => 
   
    <p> ({element.alpha3Code}) </p>
  )
}
</div>
)
  
}

export default CountriesList