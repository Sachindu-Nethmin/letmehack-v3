import React from 'react';

function RegisterTeam({ member, nextPage, prevPage, isLastPage }) {
  return (
    <>
      <div className="min-h-screen bg-emerald-950 flex flex-col items-center">
        <div className="bg-black w-full max-w-lg p-8 mt-8 rounded-lg shadow-lg text-white">
          <h1 className="text-3xl font-bold mb-6 text-center">Register {member}</h1>
          <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  // Handle submission logic here
                  alert('Form submitted successfully!');
                  }}>
            <div>
              <label className="block mb-1">{member} Name</label>
              <input
                type="text"
                placeholder="Your answer"
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">University</label>
              <input
                type="text"
                placeholder="Your answer"
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">NIC</label>
              <input
                type="text"
                placeholder="Your answer"
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">WhatsApp Contact Number</label>
              <input
                type="text"
                placeholder="Your answer"
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Degree Program</label>
              <input
                type="text"
                placeholder="Your answer"
                className="w-full p-2 rounded bg-neutral-700 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1">Academic Year</label>
              <div className="space-y-2">
                <div>
                  <input type="radio" name="academic_year" id="year1" className="mr-2" />
                  <label htmlFor="year1">1st Year</label>
                </div>
                <div>
                  <input type="radio" name="academic_year" id="year2" className="mr-2" />
                  <label htmlFor="year2">2nd Year</label>
                </div>
                <div>
                  <input type="radio" name="academic_year" id="year3" className="mr-2" />
                  <label htmlFor="year3">3rd Year</label>
                </div>
                <div>
                  <input type="radio" name="academic_year" id="year4" className="mr-2" />
                  <label htmlFor="year4">4th Year</label>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              {prevPage && (
                <button
                  type="button"
                  onClick={() => (window.location.href = prevPage)}
                  className="bg-neutral-600 hover:bg-neutral-800 text-white py-2 px-4 rounded"
                >
                  Back
                </button>
              )}
              {!isLastPage ? (
                <button
                  type="button"
                  onClick={() => (window.location.href = nextPage)}
                  className="bg-neutral-600 hover:bg-neutral-800 text-white py-2 px-4 rounded"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterTeam;
