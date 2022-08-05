import Box from '@mui/material/Box';
import CircularProgress, {circularProgressClasses,} from '@mui/material/CircularProgress';

export default function ProgressoCircular(props) {

    return (
        <>
            <Box className="d-flex align-items-center justify-content-center" sx={{ position: 'relative' }}>
                <CircularProgress variant="determinate" value={100} size={180} thickness={1.25} sx={{color: "#2B2B36", }} ></CircularProgress>

                <CircularProgress variant="determinate" value={75} size={180} thickness={1.25}
                sx={{color: "#A9DFD8", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                left: 0,}} ></CircularProgress>

                <Box className="d-flex align-items-center justify-content-center" sx={{ position: 'absolute', left: 15 }}>
                        <CircularProgress variant="determinate" value={100} size={150} thickness={1.5} sx={{color: "#2B2B36", }} ></CircularProgress>

                        <CircularProgress variant="determinate" value={75} size={150} thickness={1.5}
                        sx={{color: "#F2C8ED", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                        left: 0,}} ></CircularProgress>

                        <Box className="d-flex align-items-center justify-content-center" sx={{ position: 'absolute', left: 15 }}>
                            <CircularProgress variant="determinate" value={100} size={120} thickness={1.75} sx={{color: "#2B2B36", }} ></CircularProgress>

                            <CircularProgress variant="determinate" value={75} size={120} thickness={1.75}
                            sx={{color: "#E7DF9B", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                            left: 0,}} ></CircularProgress>

                            <div className="CircularProgress TotalStats">
                                <h6>53</h6>
                                <span>Tarefas</span>
                            </div>
                        </Box>
                </Box>
            </Box>
            
        </>
    )
}