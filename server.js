const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/homz_infra', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Register route
app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, email });
    newUser.save((err) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('User registered');
    });
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, async (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(400).send('User not found');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');
        res.status(200).send('Login successful');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
