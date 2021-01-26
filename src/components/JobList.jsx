import React from 'react'
import { Link } from 'react-router-dom'


export default function JobList({job, searchResult}) {

  
    return (
        <>

        { searchResult.length === 0 ? <div>Sorry, no jobs found</div> :
          searchResult.map(job => {
                return (
                    <li>
                        <Link to={`/jobs/${job.id}`}>{job.title} - {job.company}</Link>   
                    </li>
                )
            })
        }
  
        </>
    )
}
