import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { FiSearch } from "react-icons/fi";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search'
import { BsPersonCircle } from "react-icons/bs";


import './NavbarComponent.scss'
export default function NavbarComponent() {
  let [Login ,setLogin] =useState(false)


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
        <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='NavbarContainer'>
                    <Navbar.Brand className='brand' href="#home"> WaveMedia</Navbar.Brand>
                    
                        <Nav>
                            {Login?<BsPersonCircle className='person-icon' />:<Button className='SignBtn'> Login</Button>}
                        </Nav>
                </Container>
            </Navbar>
            <div className="SearchBarContainer">
                {/* <Form className="d-flex searchBar">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                /> 
                  <Button variant="outline-success">Search</Button>
            </Form>*/}
                <Search className='searchBar'>
                    <SearchIconWrapper>
                        <SearchIcon className='seacrchIcon'/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
               
              </div>


        </div >
    )
}
