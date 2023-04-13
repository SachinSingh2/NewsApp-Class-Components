import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
// Now we are going to declare props in class based components which are different from the react function components

let {title , description , imageUrl , NewsUrl , author , date , source} = this.props;

    return (
      <div>

<>

<div className="container my-3">

<div className="card"  >
  <span className='position-absolute top-0  badge round-pill bg-danger' style={{translate:'(-1%,-50%)'}} >{source}</span>
  <img src={!imageUrl?'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/03/0/0/afterpay.jpg?ve=1&tl=1':imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'> By {author} on {new Date(date).toUTCString()}</small></p>
    <a href={NewsUrl} rel='noreferrer' target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>

</div>


</>

      </div>
    )
  }
}

export default NewsItem
