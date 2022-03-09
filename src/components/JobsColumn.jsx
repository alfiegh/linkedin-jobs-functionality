import React, { useState } from 'react';
import logo from '../images/TBD.png';
import { BsCheck2Square, BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import styled from 'styled-components';

const JobsColumn = ({ position, title, company, location, badge }) => {
  return (
    <div className='container' style={{ marginLeft: '12px' }}>
      <div
        style={{
          height: '136px',
          borderBottom: '0.5px solid rgb(120,120,120)',
          borderRight: '0.5px solid rgb(120,120,120)',
          background: 'white',
        }}
        className='row'
      >
        <div className='col-md-2 mt-3'>
          <img
            style={{
              height: '50px',
              width: '50px',
              marginLeft: '1rem',
              marginTop: '1rem',
            }}
            src={logo}
            alt=''
          />
        </div>
        <div className='col-md-8'>
          <h2
            style={{
              fontSize: '1.2rem',
              marginTop: '10px',
              color: 'rgb(45,100,188)',
              fontWeight: '600',
              marginBottom: '3px',
            }}
          >
            {position}
          </h2>
          <p
            style={{
              marginBottom: '2px',
              fontWeight: '300',
              color: 'rgb(102,102,102)',
              fontSize: '0.9rem',
            }}
          >
            {title}
          </p>
          <p
            style={{
              marginBottom: '2px',
              fontWeight: '300',
              color: 'rgb(102,102,102)',
              fontSize: '0.9rem',
            }}
          >
            {company}
          </p>
          <p
            style={{
              marginBottom: '2px',
              fontWeight: '300',
              color: 'rgb(102,102,102)',
              fontSize: '0.9rem',
            }}
          >
            {location}
          </p>
          {badge ? (
            <p
              style={{
                marginBottom: '2px',
                fontWeight: '300',
                color: 'rgb(102,102,102)',
                fontSize: '0.9rem',
              }}
            >
              <BsCheck2Square style={{ fontSize: '1.3rem' }} /> You have a
              preferred skill badge
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
              <BsFillEmojiHeartEyesFill style={{ fontSize: '1.3rem' }} /> Your
              profile matches this job
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsColumn;
