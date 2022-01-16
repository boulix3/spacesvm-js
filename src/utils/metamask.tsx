declare global {
	interface Window {
		ethereum: any
	}
}

const ethereum = window.ethereum

export const metaMaskExists = typeof ethereum !== undefined && ethereum?.isMetaMask

export const mmRequestAccounts = async () => {
	if (!metaMaskExists) return
	return ethereum.request({ method: 'eth_requestAccounts' })
}

export const signWithMetaMaskV4 = async (payload: any): Promise<string | undefined> => {
	try {
		const accounts = await mmRequestAccounts()
		const signature = await ethereum.request({
			method: 'eth_signTypedData_v4',
			params: [accounts[0], JSON.stringify(payload)],
		})
		return signature
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error)
	}
}
