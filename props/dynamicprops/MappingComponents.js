class CommentBox extends React.Component {
  render() {
    const comments = this._getComments() || [];
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">{comments.length} comments</h4>
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }
  
  _getComments() {
    const commentList = [  //Add an avatarUrl property to each element in the commentList array and set the values to 'images/default-avatar.png'.
      { id: 1, author: 'Clu', body: 'Just say no to love!' ,avatarUrl:'images/default-avatar.png'},
      { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...' ,avatarUrl:'images/default-avatar.png' }
    ];  
    
    //Let's make _getComments() return an array of Comment components by calling the map() method of commentList and having it return a Comment for each item in the array.
    //Now let's pass these properties as props to each Comment component: author, body, and avatarUrl. Don't forget that the callback to map takes an argument that represents each element from the calling object.
    
   return commentList.map((comment) => {
  return (<Comment
            key={comment.id}
           author={comment.author}
           body={comment.body}
           avatarUrl={comment.avatarUrl} />);
});
  }
}

class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">
          {this.props.body}
        </p>
        <div className="comment-actions">
          <a href="#">Delete comment</a>
        </div>
      </div>
    );
  }
}
