import React from 'react';

class Blog extends React.Component{

    componentDidMount(){
        this.props.onWindowChange("BLOG");
    }

    render(){
        return(
            <div>
            </div>
        )
    }
}
export default Blog;