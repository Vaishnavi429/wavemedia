import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search'
import { BsPersonCircle } from "react-icons/bs";
import ActionPage from '../ActionPage/ActionPage';


import './NavbarComponent.scss'
export default function NavbarComponent() {
  // state for showing signup or signin form
  const [show, setShow] = useState(false);
  // const [show, setShow] = showActionPage;
  const [login, setLogin] = useState(false)
  const handleShow = () => setShow(true);


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <>
      <div >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className='NavbarContainer'>
            <Navbar.Brand className='brand' as={Link} to='/' >WaveMedia</Navbar.Brand>

            <Nav>
              {login ? <BsPersonCircle className='person-icon' style={{ cursor: 'pointer' }} onClick={() => { setLogin(false) }} /> : <Button className='SignBtn' onClick={handleShow}> Login</Button>}
            </Nav>
          </Container>
        </Navbar>
        <div className="SearchBarContainer">
          <Search className='searchBar'>
            <SearchIconWrapper>
              <SearchIcon className='seacrchIcon' />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
      </div >
      <ActionPage showActionPage={ [show, setShow] } setLogin={setLogin} />
    </>
  )
}
