import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Course Scheduler
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/schedule" passHref>
          <Button color="inherit">Schedule</Button>
        </Link>
        <Link href="/courses" passHref>
          <Button color="inherit">Courses</Button>
        </Link>
        <Link href="/rooms" passHref>
          <Button color="inherit">Rooms</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}