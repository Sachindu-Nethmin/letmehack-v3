import React from 'react';
import RegisterTeam from './register';


export default function Member4() {
  return (
    <RegisterTeam
      member="Member 4"
      nextPage="/register/confirmation"
      prevPage="/register/member3"
      isLastPage={true}
    />
  );
}

