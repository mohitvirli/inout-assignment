import React, {Component} from 'react';

class Tag extends Component {


    render() {
        return (
            <div className="tag-wrapper">
                <div className="tag-name">{this.props.tag.value}</div>
                <div className="delete-tag" onClick={() => {this.props.deleteTag(this.props.tag.index)}}>&times;</div>
            </div>
        )
    }
}
export default Tag;