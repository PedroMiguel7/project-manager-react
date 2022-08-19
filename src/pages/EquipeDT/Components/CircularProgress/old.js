import Box from '@mui/material/Box';
import CircularProgress, {circularProgressClasses,} from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';

export default function ProgressoCircular(props) {
    if (props.op === "tarefas") {
        return (
            <>
            <Box className="ConcluidasProgress d-flex align-items-center justify-content-center" sx={{ position: 'relative' }}>
                    <CircularProgress variant="determinate" value={100} size={210} thickness={1} sx={{color: "#2B2B36", }} ></CircularProgress>

                    <Tooltip title={`${props.ValueConcluido}%`} followCursor={true}>
                        <CircularProgress variant="determinate" value={props.ValueConcluido} size={210} thickness={1}
                        sx={{color: "#A9DFD8", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                        left: 0,}} ></CircularProgress>
                    </Tooltip>

                <Box className="ConcluidasProgress d-flex align-items-center justify-content-center" sx={{ position: 'absolute', left: 15 }}>
                        <CircularProgress variant="determinate" value={100} size={180} thickness={1.25} sx={{color: "#2B2B36", }} ></CircularProgress>

                        <Tooltip title={`${props.ValueConcluido}%`} followCursor={true}>
                            <CircularProgress variant="determinate" value={props.ValueConcluido} size={180} thickness={1.25}
                            sx={{color: "#A9DFD8", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                            left: 0,}} ></CircularProgress>
                        </Tooltip>
                        

                        <Box className="AndamentoProgress d-flex align-items-center justify-content-center" sx={{ position: 'absolute', left: 15 }}>
                                <CircularProgress variant="determinate" value={100} size={150} thickness={1.5} sx={{color: "#2B2B36", }} ></CircularProgress>

                                <Tooltip title={`${props.ValueAndamento}%`} followCursor={true} placement="right">
                                    <CircularProgress variant="determinate" value={props.ValueAndamento} size={150} thickness={1.5}
                                    sx={{color: "#F2C8ED", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                                    left: 0,}} ></CircularProgress>
                                </Tooltip>
                                

                                <Box className="PendenteProgress d-flex align-items-center justify-content-center" sx={{ position: 'absolute', left: 15 }}>
                                    <CircularProgress variant="determinate" value={100} size={120} thickness={1.75} sx={{color: "#2B2B36", }} ></CircularProgress>

                                    <Tooltip title="0%" followCursor={true} placement="top">
                                        <CircularProgress variant="determinate" value={0} size={120} thickness={1.75}
                                        sx={{color: "#E7DF9B", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                                        left: 0,}} ></CircularProgress>
                                    </Tooltip>
                                    

                                    <div className="CircularProgress TotalStats d-flex flex-column">
                                        <h6>{props.Total}</h6>
                                        <span>{props.StatsTitle}</span>
                                    </div>
                                </Box>
                        </Box>
                    </Box>
            </Box>

                
                
            </>
        )    

    } else {
        return (
            <>
                <Box className="ConcluidasProgress d-flex align-items-center justify-content-center" sx={{ position: 'relative' }}>
                    <CircularProgress variant="determinate" value={100} size={180} thickness={1.25} sx={{color: "#2B2B36", }} ></CircularProgress>

                    <Tooltip title={`${props.ValueConcluido}%`} followCursor={true}>
                        <CircularProgress variant="determinate" value={props.ValueConcluido} size={180} thickness={1.25}
                        sx={{color: "#A9DFD8", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                        left: 0,}} ></CircularProgress>
                    </Tooltip>
                    

                    <Box className="AndamentoProgress d-flex align-items-center justify-content-center" sx={{ position: 'absolute', left: 15 }}>
                            <CircularProgress variant="determinate" value={100} size={150} thickness={1.5} sx={{color: "#2B2B36", }} ></CircularProgress>

                            <Tooltip title={`${props.ValueAndamento}%`} followCursor={true} placement="right">
                                <CircularProgress variant="determinate" value={props.ValueAndamento} size={150} thickness={1.5}
                                sx={{color: "#F2C8ED", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                                left: 0,}} ></CircularProgress>
                            </Tooltip>
                            

                            <Box className="PendenteProgress d-flex align-items-center justify-content-center" sx={{ position: 'absolute', left: 15 }}>
                                <CircularProgress variant="determinate" value={100} size={120} thickness={1.75} sx={{color: "#2B2B36", }} ></CircularProgress>

                                <Tooltip title="0%" followCursor={true} placement="top">
                                    <CircularProgress variant="determinate" value={0} size={120} thickness={1.75}
                                    sx={{color: "#E7DF9B", [`& .${circularProgressClasses.circle}`]: {strokeLinecap: 'round', },backgroundColor: "", position: 'absolute',
                                    left: 0,}} ></CircularProgress>
                                </Tooltip>
                                

                                <div className="CircularProgress TotalStats d-flex flex-column">
                                    <h6>{props.Total}</h6>
                                    <span>{props.StatsTitle}</span>
                                </div>
                            </Box>
                    </Box>
                </Box>
                
            </>
        )    
    }
    
}