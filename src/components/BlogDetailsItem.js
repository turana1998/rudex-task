import React from 'react'

const BlogDetailsItem = ({id,title,description}) => {
    
    return (
        <div className="mt-5 ">
        <div className="topnav d-flex ">
          

        </div>
        <h2 className="text-center m-3">{title}</h2>
        <div className="post">
            <h5 className="text-center m-3">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h5>
            <p>
            {description}</p>
        </div>
        <div className="topnav d-flex ">
            <button className="btn btn-outline">
                Show comments </button>
            <button className="btn btn-outline"
             type="button"
             data-bs-toggle="modal"
             data-bs-target="#addcoment"
             data-bs-whatever="@fat">
                Add comments </button>
        </div>
        <div className="comments">
            <div className="comments_item">
                <div className="d-flex justify-content-between">
                    <p>Name Add</p>
                    <a>Email</a>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet turpis tristique, semper dui malesuada, consectetur ligula. Quisque felis turpis,
                </p>
            </div>
        </div>

     
    </div>
        // <div className="bloglist ">
        //     <p>Blog id: {id}</p>
        //     <p>Blog title: {title}</p>
        //     <p>Blog description: {description}</p>
        // </div>
    )
}

export default BlogDetailsItem
