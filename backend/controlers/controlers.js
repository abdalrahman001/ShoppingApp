const { validationResult } = require('express-validator');  // Correctly import validationResult

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);  // Corrected to use validationResult

  if (!errors.isEmpty()) {
    // If validation fails, return the errors
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.find(email);
    if (existingUser[0].length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user
    const user = new User(name, email, password);
    await User.save(user);  // Save the user

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
