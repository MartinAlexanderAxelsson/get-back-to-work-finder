import React from 'react'

export default function Image({job}) {
    return (
        <>
            <img src={job.company_logo}></img>
        </>
    )
}
