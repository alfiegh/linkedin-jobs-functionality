import React from 'react';
import {
  BsFillHouseDoorFill,
  BsFillPeopleFill,
  BsChatDotsFill,
  BsBellFill,
  BsLinkedin,
  BsSearch,
  BsFillCaretDownFill,
} from 'react-icons/bs';
import { FaSuitcase, FaMapMarkerAlt } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import logo from '../images/TBD.png';

const Navbar = () => {
  return (
    <header style={{ width: '100%' }}>
      <nav
        style={{
          maxWidth: '1128px',
          display: 'flex',
          //   justifyContent: 'space-between',
          alignItems: 'center',
          maxHeight: '54px',
          margin: '0 auto',
          minHeight: '100%',
          marginTop: '5px',
          marginBottom: '5px',
        }}
      >
        <i>
          <BsLinkedin
            className=' mx-1'
            style={{
              height: '34px',
              width: '34px',
              marginLeft: '10px',
              marginRight: '8px',
              color: 'rgb(45,100,188)',
            }}
          />
        </i>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            className='mx-1'
            style={{
              background: 'rgb(239,243,248)',
              borderRadius: '5px',
              width: 'calc(100%/2.6)',
              height: '60%',
              marginTop: '2px',
            }}
          >
            {/* <label htmlFor=''>
              <BsSearch
                style={{ fontSize: '0.8rem', display: 'inline-block' }}
              />
            </label> */}
            <input
              style={{
                border: 'none',
                background: 'none',
                height: '32px',
                outline: 'none',
              }}
              placeholder='Search by title, skill...'
            />
          </div>

          <div
            className='mx-1'
            style={{
              background: 'rgb(239,243,248)',
              borderRadius: '5px',
              width: 'calc(100%/2.6)',
              height: '60%',
              marginTop: '2px',
            }}
          >
            {/* <label htmlFor=''>
              <FaMapMarkerAlt style={{ fontSize: '0.8rem' }} />
            </label> */}
            <input
              style={{
                border: 'none',
                background: 'none',
                height: '32px',
                outline: 'none',
              }}
              placeholder='Search by title, skill, or...'
            />
          </div>

          <button
            // style={{
            //   border: '1px solid, blue',
            //   borderRadius: '20px',
            //   background: 'none',
            //   color: 'blue',
            //   display: 'inline-flex',
            //   maxWidth: '480px',
            //   height: '2.2rem',
            //   padding: '1.2rem',
            //   textAlign: 'center',
            // }}
            style={{
              backgroundColor: 'transparent',
              borderRadius: '27px',
              border: '1px solid rgb(45,100,188)',
              display: 'inline-block',
              cursor: 'pointer',
              color: 'rgb(45,100,188)',
              fontFamily: 'Arial',
              fontSize: '16px',
              fontWeight: 'bold',
              padding: '4px 16px',
              textDecoration: 'none',

              //   height: '60%',
              //   lineHeight: '2rem',
              margin: '2px 5px',
            }}
          >
            Search
          </button>
        </div>
        <div
          className='d-flex justify-content-between align-items-center mx-3'
          style={{ width: 'calc(100%)' }}
        >
          <BsFillHouseDoorFill
            style={{ fontSize: '1.3rem' }}
            className='text-secondary'
          />
          <BsFillPeopleFill
            style={{ fontSize: '1.3rem' }}
            className='text-secondary mx-2'
          />
          <FaSuitcase
            style={{ fontSize: '1.3rem' }}
            className='text-secondary mx-2'
          />
          <BsChatDotsFill
            style={{ fontSize: '1.3rem' }}
            className='text-secondary mx-2'
          />
          <BsBellFill
            style={{ fontSize: '1.3rem' }}
            className='text-secondary mx-2'
          />
          <img style={{ maxHeight: '30px' }} src={logo} alt='' />

          <CgMenuGridR
            className='display-6'
            style={{ borderLeft: '1px solid grey', paddingLeft: '10px' }}
          />
          <a
            style={{ fontSize: '10px', maxWidth: '80px', textAlign: 'center' }}
            href='#'
          >
            Get Hired Faster, Try Premium Free
          </a>
        </div>
      </nav>
      <div
        style={{
          width: '100%',
          height: '54px',
          borderTop: '0.5px solid grey',
        }}
      >
        <div
          style={{
            maxWidth: '1128px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-evenly',
            paddingTop: '12px',
          }}
        >
          <button
            style={{
              background: 'green',
              border: '1px solid rgb(147,147,147)',
              color: 'white',
              borderRadius: '15px',
              padding: '3px 14px',
              fontWeight: '500',
            }}
          >
            Jobs <BsFillCaretDownFill />
          </button>
          <button
            style={{
              background: 'none',
              border: '1px solid rgb(147,147,147)',
              color: 'rgb(102,102,102)',
              borderRadius: '15px',
              padding: '3px 14px',
              fontWeight: '500',
            }}
          >
            Date Posted <BsFillCaretDownFill />
          </button>
          <button
            style={{
              background: 'none',
              border: '1px solid rgb(147,147,147)',
              color: 'rgb(102,102,102)',
              borderRadius: '15px',
              padding: '3px 14px',
              fontWeight: '500',
            }}
          >
            {' '}
            Experience Level <BsFillCaretDownFill />
          </button>
          <button
            style={{
              background: 'none',
              border: '1px solid rgb(147,147,147)',
              color: 'rgb(102,102,102)',
              borderRadius: '15px',
              padding: '3px 14px',
              fontWeight: '500',
            }}
          >
            {' '}
            Company <BsFillCaretDownFill />
          </button>
          <button
            style={{
              background: 'none',
              border: '1px solid rgb(147,147,147)',
              color: 'rgb(102,102,102)',
              borderRadius: '15px',
              padding: '3px 14px',
              fontWeight: '500',
            }}
          >
            {' '}
            Job Type <BsFillCaretDownFill />
          </button>
          <button
            style={{
              background: 'none',
              border: '1px solid rgb(147,147,147)',
              color: 'rgb(102,102,102)',
              borderRadius: '15px',
              padding: '3px 14px',
              fontWeight: '500',
            }}
          >
            On-site/Remote <BsFillCaretDownFill />
          </button>
          <button
            style={{
              background: 'none',
              border: '1px solid rgb(147,147,147)',
              color: 'rgb(102,102,102)',
              borderRadius: '15px',
              padding: '3px 14px',
              fontWeight: '500',
            }}
          >
            Easy Apply
          </button>
          <button
            style={{
              background: 'none',
              border: '1px solid rgb(147,147,147)',
              color: 'rgb(102,102,102)',
              borderRadius: '15px',
              padding: '3px 14px',
              fontWeight: '500',
            }}
          >
            All filters
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
