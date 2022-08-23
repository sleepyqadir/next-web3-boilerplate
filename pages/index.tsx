import { Box, Container, Heading, Text, Button, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import Nav from '../components/Nav'
function Home() {
  return (
    <Container
      style={{
        height: '100vh',
        backgroundPosition: 'center',
        marginTop: '20px',
      }}
      maxW="1200px"
    >
      <Head>
        <title>next-web3-boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              Get started with <br />
              <Text as={'span'} color={'#F9C65D'}>
                next react boileplate
              </Text>
            </Heading>
            <Text color={'white.800'}>
              The ultimate boileplate with no of functionality and chakra ui
              enabled in it
            </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}
            >
              <Button
                colorScheme={'orange'}
                bg={'#F9C65D'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: '#F9A35D',
                }}
              >
                Github Url
              </Button>
            </Stack>
          </Stack>
        </Container>
      </main>
    </Container>
  )
}

export default Home
