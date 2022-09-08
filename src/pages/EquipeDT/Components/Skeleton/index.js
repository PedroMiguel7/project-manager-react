import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Container } from './style';

export default function MembrosSkeleton() {
    return (
        <Container direction="row" spacing={1}>
            <Skeleton variant="circular" width={40} height={40} />
            
            <Stack width="30%">
                <Skeleton variant="text" sx={{ fontSize: '1rem', borderRadius: "8px" }} />
                <Skeleton variant="text" sx={{ fontSize: '0.7rem', borderRadius: "8px" }} width="60%" />
            </Stack>
        </Container>
    )
}