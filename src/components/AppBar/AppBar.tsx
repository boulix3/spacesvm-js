import { Link } from 'react-router-dom'
import { AppBar as MuiAppBar, Box, Container, Grid, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'

import Logo from '@/assets/spaces-logo.png'
import { Drawer } from '@/components/Drawer'
import { MetaMaskSelect } from '@/components/MetaMaskSelect'
import { ThemeToggle } from '@/components/ThemeToggle'
import { APP_NAME } from '@/constants'

export const AppBar = memo(() => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Box sx={{ flexGrow: 1 }}>
			<MuiAppBar
				position="fixed"
				elevation={0}
				color="transparent"
				sx={{
					// for scrollbar not to be blurry
					mr: '12px',
					width: 'calc(100% - 12px)',
					pt: '1px',
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark' ? 'rgba(9, 7, 25, 0.9)' : 'rgba(247, 247, 247, 0.9)',

					/* if backdrop support: very transparent and blurred */
					'@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
						backdropFilter: 'blur(5px)',
						backgroundColor: 'unset',
					},
				}}
			>
				<Toolbar disableGutters>
					<Container maxWidth="xl">
						<Grid container alignItems="center" justifyContent="space-between" wrap="nowrap">
							<Grid item>
								<Link
									to="/"
									style={{
										textDecoration: 'none',
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<img src={Logo} width={isMobile ? 24 : 32} height={isMobile ? 24 : 32} alt={`${APP_NAME} Logo`} />
									<Typography
										variant="h4"
										component="div"
										color="textPrimary"
										sx={{ fontFamily: 'DM Serif Display', ml: 2, letterSpacing: 6 }}
									>
										{APP_NAME}
									</Typography>
								</Link>
							</Grid>

							<Grid
								item
								container
								alignItems="center"
								justifyContent="flex-end"
								wrap="nowrap"
								spacing={isMobile ? 0 : 2}
							>
								<Grid item sx={{ display: { xs: 'none', md: 'inherit' } }}>
									<ThemeToggle />
								</Grid>

								{!isMobile && (
									<Grid item>
										<MetaMaskSelect />
									</Grid>
								)}

								<Grid item>
									<Drawer />
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</MuiAppBar>
		</Box>
	)
})
