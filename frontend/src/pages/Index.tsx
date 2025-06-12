import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background.paper',
            borderRadius: 2,
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{
              mb: 4,
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            ยินดีต้อนรับเข้าสู่ระบบ
          </Typography>

          <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
            กรุณาเลือกดำเนินการ
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/login')}
              sx={{ minWidth: 200 }}
            >
              เข้าสู่ระบบ
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/register')}
              sx={{ minWidth: 200 }}
            >
              ลงทะเบียน
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Index;
