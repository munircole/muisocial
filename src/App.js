import './App.css';
import { Box, Stack} from '@mui/material';
import LeftSidebar from './components/leftSidebar';
import NewsFeed from './components/newsFeed';
import RightSidebar from './components/rightSidebar';
import Navbar from './components/navbar';
import AddPost from './components/addPost';

function App() {

  return (
      <Box>
        <Navbar/>
        <Stack direction="row" paddingTop={5} spacing={2} justifyContent={'space-between'}>
          <LeftSidebar />
          <NewsFeed />
          <RightSidebar />
        </Stack>
        <AddPost />
      </Box>

  );
}

export default App;
