import React,{useState, useEffect} from 'react'
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect(() =>{
        const search = async () => {
           const{data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term
                }
            })
          setResults(data.query.search);
        };
        
        //We make use of the if/else statement to stop the delay from setTimeout on the initial render
        if(term && !results.length){
            search();
        } else {

            //setTimeout is used to delay the api request
        const timeOutId = setTimeout(() => {
            if(term){
                search();
            }
        }, 1000)
        // We use the cleanup function to cancel the api request each time the use types
        return () => {
            clearTimeout(timeOutId)
        }
        }
        

        
    }, [term])

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                    </div> 
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html:result.snippet}}></span>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter search term</label>
                    <input value={term} onChange={e => setTerm(e.target.value)} className='input'/>
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
}



export default Search