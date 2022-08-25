import Link from 'next/link';
import { Menu, MenuButton, MenuList, ButtonGroup, IconButton, Flex, Box, Spacer, Button } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
        <Box fontSize='3xl' color='green.700' fontWeight='bold'>
            <Link href='/' paddingLeft='2'>Andry-Immo</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <ButtonGroup spacing={4}>

                    <Link href='/' passHref>

                        <Button leftIcon={<FcHome />} variantColor="teal" variant="solid">    Accueil</Button>
                    </Link>

                    <Link href='/search?purpose=for-sale' passHref>

                        <Button leftIcon={<FcAbout />} variantColor="teal" variant="solid" >    Achat</Button>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>

                        <Button leftIcon={<FiKey />} variantColor="teal" variant="solid" >   Location</Button>
                    </Link>
                </ButtonGroup >
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;