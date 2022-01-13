import { FC, memo } from 'react'
import { Box, useTheme } from '@mui/material'

import { AppBar } from '../AppBar'
import { Footer } from '../Footer'

export const Layout: FC = memo(({ children }) => {
	const theme = useTheme()

	return (
		<Box sx={{ background: theme.customPalette.customBackground }}>
			<AppBar />
			<Box
				sx={{
					p: {
						xs: 1,
						sm: 2,
					},
					display: 'flex',
					flexDirection: 'column',
					overflow: 'auto',
					height: {
						sm: 'unset',
						md: '100vh',
					},
				}}
			>
				{children}
				<Footer />
			</Box>
		</Box>
	)
})
