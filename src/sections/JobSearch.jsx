import React, { useState } from 'react';
import JobsColumn from '../components/JobsColumn';
import { openings } from '../Data/jobOpenings';
import { BsToggleOn } from 'react-icons/bs';
import DetailsColumn from '../components/DetailsColumn';

const JobSearch = () => {
  const [current, setCurrent] = useState(openings[0]);

  const handleClick = (object) => {
    setCurrent(object);

    console.log(object);
  };
  return (
    <section className='container-fluid'>
      <div className='row' style={{ background: 'rgb(243, 242, 239)' }}>
        <div className='col-md-5 offset-md-1 p-0'>
          <div
            style={{
              height: '60px',

              borderLeft: '2px solid blue',
              borderBottom: '0.5px solid rgb(120,120,120)',
              borderRight: '0.5px solid rgb(120,120,120)',
              background: 'white',
              marginLeft: '23px',
            }}
            className='d-flex justify-content-between '
          >
            <div className='d-flex flex-column justify-content-center mx-2'>
              <p style={{ marginBottom: '0' }}>
                Web developer in London, England, Unite...
              </p>
              <p
                style={{
                  marginBottom: '0',
                  fontWeight: '200',
                  fontSize: '0.7rem',
                }}
              >
                1,000 results
              </p>
            </div>
            <span className='d-flex align-items-center mx-2 text-primary'>
              <BsToggleOn style={{ fontSize: '2rem' }} />
            </span>
          </div>
          <div>
            {openings.map((o, i) => (
              <div
                onClick={() => handleClick(o)}
                key={o.id}
                style={{
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                <JobsColumn
                  i={i}
                  id={o.id}
                  position={o.position}
                  title={o.title}
                  company={o.company}
                  location={o.location}
                  badge={o.badge}
                />
              </div>
            ))}
          </div>
        </div>
        {current && (
          <div className='col-md-5 p-0'>
            <DetailsColumn current={current} />
          </div>
        )}
      </div>
    </section>
  );
};

export default JobSearch;
