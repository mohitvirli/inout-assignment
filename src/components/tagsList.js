import React, {Component} from 'react';
import Tag from './tag';

class TagsList extends Component {

    getTags() {
        const { tags, deleteTag } = this.props;
        return tags.map((d, i) => {
           return <Tag tag={d} key={i} deleteTag={deleteTag}/>
        });
    }

    render() {
        return (
            <div className="tags-list-wrapper">
                {this.getTags()}
            </div>
        )
    }
}
export default TagsList;