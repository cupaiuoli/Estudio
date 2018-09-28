import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
      <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <div className="card-title">Project Detail - { id }</div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui nesciunt iusto dignissimos iure labore sapiente hic saepe voluptatibus fugit optio, similique porro quisquam ullam reiciendis nam vero quam veritatis?</p>
            </div>
            
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted by Cupa</div>
                <div>21/9/2018</div>
            </div>

        </div>
      </div>
  )
}
export default ProjectDetails

