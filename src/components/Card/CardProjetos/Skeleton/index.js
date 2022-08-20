import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function CardSkeleton(){
    return (
        <>
            <Stack spacing={2} className="Card">
            {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '2.2rem', borderRadius: "10px" }} />
                <Stack height={120}>
                    <Skeleton variant="text" sx={{ fontSize: '1rem', borderRadius: "10px" }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem', borderRadius: "10px" }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem', borderRadius: "10px" }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem', borderRadius: "10px" }} />
                </Stack>
                <Skeleton variant="text" width="35%" sx={{ fontSize: '1rem', borderRadius: "10px" }} />

                <Stack spacing={4} justifyContent="space-between" direction="row">
                    <Stack width="100%">
                        <Skeleton variant="text" sx={{ fontSize: '1rem', borderRadius: "10px" }} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', borderRadius: "10px" }} width="60%" />
                    </Stack>
                    <Stack width="100%">
                        <Skeleton variant="text" sx={{ fontSize: '1rem', borderRadius: "10px" }} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', borderRadius: "10px" }} width="60%" />
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}