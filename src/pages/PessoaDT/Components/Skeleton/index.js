import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function ProfileSkeleton() {
    return (
        <>
            <Stack spacing={1} alignItems="center">
                <Skeleton variant="circular" width={160} height={160} />
                <Skeleton variant="text" width={240} sx={{ fontSize: '2.3rem', borderRadius: "10px" }} />
                <Skeleton variant="text" width={140} sx={{ fontSize: '1.3rem', borderRadius: "10px" }} />
            </Stack>
            <Stack spacing={5} direction="row">
                <Skeleton variant="rounded" width={100} height={100} sx={{ borderRadius: "10px" }} />
                <Skeleton variant="rounded" width={100} height={100} sx={{ borderRadius: "10px" }} />
            </Stack>
        </>
    )
}