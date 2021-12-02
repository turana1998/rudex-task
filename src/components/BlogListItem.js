import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({ id,title }) => {
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>Hover Me</h1>
        </div>
        <div className='card-back' >
            
                <h1>Name Surname</h1>
                <h3>Location</h3>
                <p> {title}</p>
                <Link to= {`/blogs/${id}`}><button>Details</button></Link> 
                <Link to= {`/edit/${id}`}><button>Edit</button></Link>
           
            </div>
      </div>
    </div>
    )
}

export default BlogListItem
