import React, {useState, useEffect} from 'react'
import JobItem from '../components/JobItem'


export default function JobDetailedPage(props) {
   
    const [job, setJob] = useState(null)
    
        const id = props.match.params.id
        function fetchJob() {
        const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setJob(data))
    }
  
    useEffect( () => {
      fetchJob()
    }, [])
    
    return (
        <>

        {job && (<JobItem job={job}/>)}

        </>
    )
}

