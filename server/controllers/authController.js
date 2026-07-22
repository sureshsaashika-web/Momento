// Auth controller for authentication & registration
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    return res.json({
      success: true,
      message: "User registered successfully",
      user: { id: "user_123", name, email, isVerified: false },
      token: "jwt_token_sample_123"
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    return res.json({
      success: true,
      message: "Login successful",
      user: {
        id: "user_123",
        name: "Alex Rivera",
        email,
        college: "Stanford University",
        department: "Computer Science",
        year: "Junior (3rd Year)"
      },
      token: "jwt_token_sample_123"
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
