const SERVER_URL = "http://localhost:3000/";

const sendOtp = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/send-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: `${phone}`,
      }),
    });

    const result = await response.json();
    
    return result;
  } catch (err) {
    console.error(`Error in sending otp: ${err}`);
  }
};


const verifyOtp = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/verify-otp`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phone,
        otp,
      }),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(`Error in verifying otp: ${err}`);
  }
};

export { sendOtp, verifyOtp };
