import style from "../Style/navbar.module.css"
import logo from "../Images/stylehublogo.png"
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Img,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  import { SearchIcon,PlusSquareIcon,EditIcon} from '@chakra-ui/icons'
  import {useContext} from "react"
  import { AuthContext } from "../Context/AuthContextProvider";
  import Logout from "./Logout";

  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    const {isAuth}=useContext(AuthContext)
  
    return (
      <Box className={style.navbar}>
        <Flex className={style.navchild}
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'80px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
           <Img className={style.logo} src={logo} alt="logo"/>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            alignItems={"center"}
            spacing={6}>
            <Box
              as={'a'}
              fontSize={'sm'}
              fontWeight={500}
              variant={'link'}
              href={'#'}>
              <span><SearchIcon/></span>
              SEARCH
            </Box>
            <Box
              as={'a'}
              fontSize={'sm'}
              fontWeight={500}
              variant={'link'}
              href={'/cart'}>
              <span><PlusSquareIcon/></span>
              CART
            </Box>
            {isAuth? <Logout/>:
            <Box
              as={'a'}
              fontSize={'sm'}
              fontWeight={500}
              variant={'link'}
              href={'/login'}>
              <span><EditIcon/></span>
              PROFILE
            </Box>}
            
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('black', 'gray.200');
    const linkHoverColor = useColorModeValue('red.500', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'md'}
                  fontWeight={700}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel1,subLabel2,subLabel3,subLabel4,subLabel5 }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={1}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.100', 'gray.900') }}>
        <Stack direction={'column'} align={'center'}>
          <Flex>
            <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel1}</Text>
            <Text fontSize={'sm'}>{subLabel2}</Text>
            <Text fontSize={'sm'}>{subLabel3}</Text>
            <Text fontSize={'sm'}>{subLabel4}</Text>
            <Text fontSize={'sm'}>{subLabel5}</Text>
            </Box>
          </Flex>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  
  const NAV_ITEMS = [
    {
      label: 'WOMEN',
      children: [
        {
          label: 'Ethnic Wear',
          subLabel1: 'Kurta Kurties',
          subLabel2:"Sarees",
          subLabel3:"Blouses",
          subLabel4:"Duppattas",
          subLabel5:"Lehengas",
          href: '#',
        },
        {
          label: 'Western Wear',
          subLabel1: 'Tops',
          subLabel2:"Dresses",
          subLabel3:"Tees",
          subLabel4:"Shirt",
          subLabel5:"Tunics",
          href: '#',
        },
      ],
    },
    {
      label: 'MEN',
      children: [
        {
            label: 'Top Wear',
            subLabel1: 'T-Shirts',
            subLabel2:"Polo T-Shirts",
            subLabel3:"Casual T-Shirts",
            subLabel4:"Formal Shirt",
            subLabel5:"Jackets",
            href: '#',
          },
          {
            label: 'Bottom Wear',
            subLabel1: 'Jeans',
            subLabel2:"Casual Trouser",
            subLabel3:"Formal Trouser",
            subLabel4:"Joggers",
            subLabel5:"Shorts",
            href: '#',
          },
      ],
    },
    {
        label: 'KIDS',
        children: [
            {
                label: 'Boys',
                subLabel1: 'T-Shirts',
                subLabel2:"Polo T-Shirts",
                subLabel3:"Casual T-Shirts",
                subLabel4:"Formal Shirt",
                subLabel5:"Jackets",
                href: '#',
              },
              {
                label: 'Girls',
                subLabel1: 'Tops',
                subLabel2:"Dresses",
                subLabel3:"Tees",
                subLabel4:"Shirt",
                subLabel5:"Tunics",
                href: '#',
              },
        ],
    },
    {
        label: 'HOME',
        href:"/"
       
    },
    {
        label: 'OFFERS',
        children: [
            {
                label: 'Ethnic Wear',
                subLabel1: 'Kurta Kurties',
                subLabel2:"Sarees",
                subLabel3:"Blouses",
                subLabel4:"Duppattas",
                subLabel5:"Lehengas",
                href: '#',
              },
              {
                label: 'Western Wear',
                subLabel1: 'Tops',
                subLabel2:"Dresses",
                subLabel3:"Tees",
                subLabel4:"Shirt",
                subLabel5:"Tunics",
                href: '#',
              },
        ],
    },
  ];