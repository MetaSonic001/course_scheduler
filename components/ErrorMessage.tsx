import { Alert, AlertTitle } from '@mui/material';

interface ErrorMessageProps {
  message: string;
  details?: string;
}

export default function ErrorMessage({ message, details }: ErrorMessageProps) {
  return (
    <Alert severity="error">
      <AlertTitle>{message}</AlertTitle>
      {details && <p>{details}</p>}
    </Alert>
  );
}