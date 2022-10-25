import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/mark${useColorModeValue('', '-dark')}.svg`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={25} height={25} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
            style={{ marginLeft: 10 }}
          >
            Asher Kim
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
