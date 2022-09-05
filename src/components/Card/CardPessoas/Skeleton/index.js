import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Container } from './style';

export default function CardSkeleton() {
    return (
        <>
            <Container spacing={1} direction="column" justifyContent="center" alignItems="center">
                <Skeleton variant="text" width="70%" sx={{ fontSize: '1.5rem', borderRadius: "8px" }} />
                <Skeleton variant="text" width="40%" sx={{ fontSize: '0.93rem', borderRadius: "8px" }} />
        
                <Stack spacing={8} direction="row">
                    <Skeleton variant="rounded" sx={{ borderRadius: "5px" }} width={45} height={35}  />
                    <Skeleton variant="rounded" sx={{ borderRadius: "5px" }} width={45} height={35}  />
                </Stack>
            </Container>
        </>
    )
}