import React from 'react'
import Image from './Image'

export default function JobItem({job}) {
    
    function createMarkup() {
        return {__html: `${job.description}`};
    }

    return (
        <>
            <h2>{job.title}</h2>
            <Image job={job}/>
            <strong>{job.type}</strong> <br/>
            <a href={job.company_url}>{job.company_url}</a>
            {/* <div dangerouslySetInnerHTML={createMarkup()} />; */}
            <div dangerouslySetInnerHTML={{__html: `${job.description}`}} />;
        </>
    )
}
