import React from "react";

import { mount} from "enzyme";
import JobList from '../JobList'
import { BrowserRouter, Link } from "react-router-dom";

describe("Test JobList.jsx component", () => {
   
     it('Should render a div with message "Sorry, no jobs found" when length of searchResult array is 0', () => {
        const wrapper = mount(  
            <BrowserRouter>
                <JobList searchResult={[]}/> 
            </BrowserRouter> 
        ); 
        expect(wrapper.find("div").text()).toBe("Sorry, no jobs found") 
    })


// it("should redirect to the correct job description page", () => {
//     const wrapper = mount(  
//         <BrowserRouter>
//             <JobList searchResult={searchResult.results}/> 
//         </BrowserRouter> 
//     );  
//     expect(wrapper.find(Link).props().to).toBe(`/jobs/${job.id}`); 
//   });

});
 



