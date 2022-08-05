import Box from '@mui/material/Box';
import CircularProgress, {circularProgressClasses,} from '@mui/material/CircularProgress';

export default function CircularProgress(props) {

    return (
        <>
            <Box className="d-flex align-items-center justify-content-center" sx={{ position: 'relative' }}>
                <CircularProgress variant="determinate" value={100} size={150} sx={{color: "#ccc", }} ></CircularProgress>

                <CircularProgress variant="determinate" value={75} size={150} 
                sx={{color: "#c4c", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                left: 0,}} ></CircularProgress>

                <Box sx={{ position: 'absolute',  }}>
                    <CircularProgress variant="determinate" value={100} size={110} sx={{color: "#ccc", }} ></CircularProgress>

                    <CircularProgress variant="determinate" value={75} size={110} 
                    sx={{color: "#c4c", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                    left: 0,}} ></CircularProgress>
                </Box>

                <div className="CircularProgress TotalStats">
                    <h6>53</h6>
                    <span>Tarefas</span>
                </div>
            </Box>
        </>
    )
}