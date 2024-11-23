import React from 'react';
import RegisterTeam from './register';

export default function Member1() {
  return (
    <RegisterTeam
      member="Member 1"
      nextPage="/register/member2"
      prevPage={null}
      isLastPage={false}
    />
  );
}

