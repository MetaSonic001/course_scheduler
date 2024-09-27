'use client';

import { db } from '@/lib/firebase';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';

const RoomForm = () => {
  const [roomName, setRoomName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleAddRoom = async () => {
    if (!roomName || !capacity) {
      setError('Please fill all fields');
      return;
    }

    try {
      await addDoc(collection(db, 'rooms'), {
        name: roomName,
        capacity: parseInt(capacity),
      });
      setRoomName('');
      setCapacity('');
      setError(null);
    } catch (e) {
      setError('Failed to add room');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Add New Room
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Box mb={2}>
        <TextField
          label="Room Name"
          variant="outlined"
          fullWidth
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Capacity"
          variant="outlined"
          fullWidth
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          margin="normal"
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleAddRoom}>
        Add Room
      </Button>
    </Container>
  );
};

export default RoomForm;
