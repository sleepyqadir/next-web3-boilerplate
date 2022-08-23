import { Box, Flex, Button, Stack, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useWeb3React } from '@web3-react/core'
import useEagerConnect from '../hooks/useEagerConnect'
import Account from './Account'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Network from './Network'
import ETHBalance from './ETHBalance'
import TokenBalance from './TokenBalance'
const DAI_TOKEN_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { account, library } = useWeb3React()
  const triedToEagerConnect = useEagerConnect()
  const router = useRouter()

  const isConnected = typeof account === 'string' && !!library

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Image width="80" height="80" src={require('../public/logo.png')} />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              {isConnected && (
                <section>
                  <ETHBalance />

                  <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
                </section>
              )}
              <Network />
              <Account triedToEagerConnect={triedToEagerConnect} />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
