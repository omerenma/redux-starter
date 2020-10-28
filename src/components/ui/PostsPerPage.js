import React from 'react'

function PostsPerPage({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
      pageNumbers.push(i)  
    }
    return (
        <div> 
            <nav>
                {
                    pageNumbers.map(number => (
                        <a href="!#"
                            style={{textDecoration:'none', padding:5}} 
                            onClick={() => paginate(number)}>
                            {number}
                        </a>
                    ))
                }
            </nav>
        </div>
    )
}

export default PostsPerPage
  