import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

static defaultProps ={
  country:'in',
  pageSize:6,
  category:'genral',
};

static propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
};


// async updateNews(){
//      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0c03cb08142445488e48e18eda2a101&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
//   this.setState({loading:true})
//   let Data = await fetch(url)
//   let parsedData = await Data.json()
//   console.log(parsedData)
//   this.setState({articles: parsedData.articles ,   totalResults: parsedData.totalResults , loading:false})
// }



// Function to capitalize the first letter of the string
capitalize = (string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
};


// -------------------------------------------------------------------Constructor starts from here

  constructor(props) {
    super(props);
    console.log("Hello this is news from the news monkey and if you are reading this message that means the constructor has been placed");
    this.state = {
      articles: [],
      loading: false,
      page: 1 ,
      totalResults:0
  
    };

    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`

  }   //Constructor ends here



  //This function will work when the component mount on the DOM .There are lots of function like this
  async componentDidMount(){
    this.fetchMoreData()
  } 





  fetchMoreData = async () => {
this.setState({page : this.state.page + 1})
this.props.setProgress(25)
     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0c03cb08142445488e48e18eda2a101&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
this.setState({loading:true})
let Data = await fetch(url)
let parsedData = await Data.json()
console.log(parsedData)
this.setState({articles: this.state.articles.concat(parsedData.articles) ,  totalResults: parsedData.totalResults , loading:false})
console.log(this.state.articles)
this.props.setProgress(100)
  };



  render() {
    return (
<>
        <center>
 
          <h1>NewsMonkey - Top Headlines - <span>{this.capitalize(this.props.category)}</span> </h1>
        </center>


        {/* {this.state.loading && <Spin/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spin/>}
        >

<div className="container">
        <div className="row ">
          {this.state.articles.map((element , index) => {
            return (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={element.title?element.title:''}
                  description={element.description?element.description:''}
                  imageUrl={element.urlToImage}
                  NewsUrl={element.url}
                  author={element.author?element.author:'Anonymous'}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>

        </div>

        </InfiniteScroll>


{/* Button for next and previous we are comenting them so we should not have to delte them and in future if we need them */}

{/* <div className="container d-flex justify-content-between  my-5 ">
<button type="button" disabled={this.state.page<=1} className="btn btn-dark mx-3" onClick={this.HandlePrevious}  > &larr; Previous </button>
<button type="button" disabled={this.state.page + 1 >  Math.ceil(this.state.totalResults/this.props.pageSize)}  className="btn btn-dark mx-3 " onClick={this.HandleNext}  >  Next &rarr; </button> */}

{/* </div> */}
</>
    
    );
  }
}

export default News;
