class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <p className="comment-header">
          {this.props.author}    //Replace the hard-coded text within the <p> tag that has the class comment-header to read in the author prop instead.
        </p>
        <p className="comment-body">
          I wanna know what love is...
        </p>
        <div className="comment-actions">
          <a href="#">Delete comment</a>
        </div>
      </div>
    );
  }
}
