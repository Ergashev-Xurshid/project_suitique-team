import React from 'react'

const Terms = () => {

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="px-8 py-4 mb-4 mt-12 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">Terms of Service</h2>
      <p className="text-lg mb-4">
        These Terms of Service govern your use of our platform. By accessing or using our services, you agree to comply with these terms.
      </p>
      <p className="text-lg mb-4">
        You are responsible for maintaining the confidentiality of your account details and are liable for any activities that occur under your account.
      </p>
      <p className="text-lg mb-4">
        We reserve the right to suspend or terminate your access to our services if you violate any of these terms.
      </p>
      <button
        onClick={handleGoBack}
        className="mt-6 py-2 px-6 bg-transparent border-none cursor-pointer "
      >
        Go Back
      </button>
    </div>
  )
}

export default Terms