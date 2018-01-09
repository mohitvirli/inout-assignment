import React, {Component} from 'react';
import Tag from './tag';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';


const SortableItem = SortableElement(({tag, deleteTag}) =>
    <Tag tag={tag} deleteTag={deleteTag}/>
);

const SortableList = SortableContainer(({items, deleteTag}) => {
    return (
        <div className="tags-list-wrapper">
            {items.map((tag, index) => (
                <SortableItem key={index} index={index} tag={tag} deleteTag={deleteTag}/>
            ))}
        </div>
    );
});


class TagsList extends Component {

    shouldCancelStart = (e) => {
        return e.target.className === 'delete-tag';
    }

    render() {
        return (
            <SortableList
                items={this.props.tags}
                onSortEnd={this.props.onSortEnd}
                deleteTag={this.props.deleteTag}
                axis='xy'
                shouldCancelStart={this.shouldCancelStart}
            />
        )
    }
}
export default TagsList;