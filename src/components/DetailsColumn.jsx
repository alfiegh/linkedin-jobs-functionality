import React from 'react';
import {
  BsCheck2Square,
  BsFillEmojiHeartEyesFill,
  BsPeopleFill,
} from 'react-icons/bs';
import { FaSuitcase, FaRegBuilding } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import logo from '../images/TBD.png';

const DetailsColumn = ({ current }) => {
  return (
    <div
      style={{
        background: 'white',
        paddingLeft: '15px',
        paddingRight: '15px',
        height: '100%',
      }}
    >
      <h3>{current.position}</h3>
      <div className='d-flex'>
        <p
          style={{
            marginBottom: '2px',
            fontWeight: '400',
            color: '#252525',
            fontSize: '0.9rem',
            marginRight: '10px',
          }}
        >
          {current.company} -
        </p>
        <p
          style={{
            marginBottom: '2px',
            fontWeight: '400',
            color: '#252525',
            fontSize: '0.9rem',
          }}
        >
          {current.location}
        </p>
      </div>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '200px',
        }}
      >
        <div className='d-flex align-items-center'>
          <FaSuitcase style={{ fontSize: '1.4rem', marginRight: '10px' }} />
          {current.pay_range}£ - {current.employment_type}
        </div>
        <div className='d-flex align-items-center'>
          <FaRegBuilding style={{ fontSize: '1.4rem', marginRight: '10px' }} />{' '}
          {current.employees_number} employees
        </div>

        {current && current.alumni ? (
          <div className='d-flex align-items-center'>
            <p style={{ marginBottom: '0' }}>
              <BsPeopleFill
                style={{ fontSize: '1.4rem', marginRight: '10px' }}
              />{' '}
              1 company alumni
            </p>
          </div>
        ) : (
          <div className='d-flex align-items-center'>
            <p style={{ marginBottom: '0' }}>
              <BsPeopleFill
                style={{ fontSize: '1.4rem', marginRight: '10px' }}
              />
              1 school alumni
            </p>
          </div>
        )}

        <div className='d-flex align-items-center'>
          <HiOutlineLightBulb
            style={{ fontSize: '1.4rem', marginRight: '10px' }}
          />{' '}
          See recent hiring trends for {current.company}
        </div>
        <div className='d-flex align-items-center'>
          {current && current.badge ? (
            <p
              style={{
                marginBottom: '2px',
                fontWeight: '300',
                color: 'rgb(102,102,102)',
                fontSize: '0.9rem',
              }}
            >
              <BsCheck2Square
                style={{ fontSize: '1rem', marginRight: '10px' }}
              />{' '}
              You have a preferred skill badge
            </p>
          ) : (
            <p
              style={{
                marginBottom: '2px',
                fontWeight: '300',
                color: 'rgb(102,102,102)',
                fontSize: '0.9rem',
              }}
            >
              <BsFillEmojiHeartEyesFill
                style={{ fontSize: '1.3rem', marginRight: '10px' }}
              />{' '}
              Your profile matches this job
            </p>
          )}
        </div>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <div>
          <p
            style={{
              marginBottom: '0',
              fontWeight: '600',
              color: 'rgb(142,142,142)',
              fontSize: '0.9rem',
            }}
          >
            Posted by
          </p>
        </div>
        <div className='d-flex'>
          <img
            style={{
              height: '50px',
              width: '50px',
              marginRight: '10px',
              marginTop: '0',
            }}
            src={logo}
            alt='poster photo'
          />
          <div>
            <p
              style={{
                marginBottom: '0',
                fontWeight: 'bold',
                fontSize: '0.9rem',
              }}
            >
              {current.posted_by}
            </p>
            <p
              style={{
                marginBottom: '0',
                fontWeight: '300',
                fontSize: '0.9rem',
              }}
            >
              {current.author_position}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <p style={{ textAlign: 'justify' }}>{current.about}</p>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <p>Role Responsabilities:</p>
        {current &&
          current.role_needs &&
          current.role_needs.map((i) => (
            <li style={{ listStyle: 'none', marginLeft: '1.5rem' }}>{i}</li>
          ))}
      </div>
      <div style={{ marginTop: '2rem' }}>
        <p>Role Requirements:</p>
        {current &&
          current.role_req &&
          current.role_req.map((i) => (
            <li style={{ listStyle: 'none', marginLeft: '1.5rem' }}>{i}</li>
          ))}
      </div>
    </div>
  );
};

export default DetailsColumn;
