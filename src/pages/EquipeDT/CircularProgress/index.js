import Box from '@mui/material/Box';
import CircularProgress, {circularProgressClasses,} from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';

export default function ProgressoCircular(props) {

    return (
        <>
            <Box className="ConcluidasProgress d-flex align-items-center justify-content-center" sx={{ position: 'relative' }}>
                <CircularProgress variant="determinate" value={100} size={180} thickness={1.25} sx={{color: "#2B2B36", }} ></CircularProgress>

                <Tooltip title="25%" followCursor={true}>
                    <CircularProgress variant="determinate" value={25} size={180} thickness={1.25}
                    sx={{color: "#A9DFD8", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                    left: 0,}} ></CircularProgress>
                </Tooltip>
                

                <Box className="AndamentoProgress d-flex align-items-center justify-content-center" sx={{ position: 'absolute', left: 15 }}>
                        <CircularProgress variant="determinate" value={100} size={150} thickness={1.5} sx={{color: "#2B2B36", }} ></CircularProgress>

                        <Tooltip title="50%" followCursor={true} placement="right">
                            <CircularProgress variant="determinate" value={50} size={150} thickness={1.5}
                            sx={{color: "#F2C8ED", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                            left: 0,}} ></CircularProgress>
                        </Tooltip>
                        

                        <Box className="PendenteProgress d-flex align-items-center justify-content-center" sx={{ position: 'absolute', left: 15 }}>
                            <CircularProgress variant="determinate" value={100} size={120} thickness={1.75} sx={{color: "#2B2B36", }} ></CircularProgress>

                            <Tooltip title="25%" followCursor={true} placement="top">
                                <CircularProgress variant="determinate" value={25} size={120} thickness={1.75}
                                sx={{color: "#E7DF9B", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                                left: 0,}} ></CircularProgress>
                            </Tooltip>
                            

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