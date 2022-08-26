import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function CardSkeleton(){
    return (
        <>
            <Stack spacing={2} className="Card">
                <Skeleton variant="text" sx={{ fontSize: '2rem', borderRadius: "8px" }} />
                <Stack height={120}>
                    <Skeleton variant="text" sx={{ fontSize: '0.8rem', borderRadius: "8px" }} />
                    <Skeleton variant="text" sx={{ fontSize: '0.8rem', borderRadius: "8px" }} />
                    <Skeleton variant="text" sx={{ fontSize: '0.8rem', borderRadius: "8px", width: "70%" }} />
                </Stack>
                <Skeleton variant="text" width="35%" sx={{ fontSize: '0.8rem', borderRadius: "8px", mb: 5 }} />

                <Stack spacing={5} justifyContent="space-between" direction="row">
                    <Stack width="80%">
                        <Skeleton variant="text" sx={{ fontSize: '1rem', borderRadius: "8px" }} />
                        <Skeleton variant="text" sx={{ fontSize: '0.8rem', borderRadius: "8px" }} width="60%" />
                    </Stack>
                    <Stack width="80%">
                        <Skeleton variant="text" sx={{ fontSize: '1rem', borderRadius: "8px" }} />
                        <Skeleton variant="text" sx={{ fontSize: '0.8rem', borderRadius: "8px" }} width="60%" />
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}