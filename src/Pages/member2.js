import React from 'react';
import RegisterTeam from './register';


export default function Member2() {
  return (
    <RegisterTeam
      member="Member 2"
      nextPage="/register/member3"
      prevPage="/register/member1"
      isLastPage={false}
    />
  );
}

