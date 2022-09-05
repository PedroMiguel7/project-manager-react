import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Container } from './style';

export default function CardSkeleton() {
    return (
        <>
            <Container spacing={2} direction="column">
                <Skeleton variant="text" sx={{ fontSize: '1.5rem', borderRadius: "8px" }} />
        
                <Stack justifyContent="space-between" direction="row">
                    <Skeleton variant="text" width="50%" sx={{ fontSize: '0.8rem', borderRadius: "8px" }} />
                    <Stack direction="row">
                        <Skeleton variant="circular"  width={32} height={32} />
                        <Skeleton variant="circular"  width={32} height={32} />
                        <Skeleton variant="circular"  width={32} height={32} />
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}