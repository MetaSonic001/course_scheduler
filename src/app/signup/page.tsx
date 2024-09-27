'use client';

import { auth, googleProvider } from '@/lib/firebase';
import { Box, Button, TextField, Typography } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async () => {
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Sign-up successful, handle the next steps here
    } catch (error) {
      setError('Failed to create an account. Please try again.');
      console.error('Error signing up with email and password:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
      // Google sign-in successful, handle the next steps here
    } catch (error) {
      setError('Failed to sign in with Google. Please try again.');
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSignup}>
        Sign Up
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleGoogleSignIn} style={{ marginTop: 10 }}>
        Sign in with Google
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default SignupPage;
