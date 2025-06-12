import { Box, Container, Typography, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            ยินดีต้อนรับเข้าสู่ระบบ
          </Typography>
          <Typography variant="body1" color="text.secondary">
            คุณได้เข้าสู่ระบบสำเร็จแล้ว
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
