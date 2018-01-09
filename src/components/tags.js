import React, { Component } from 'react';
import TagsList from './tagsList';
import {arrayMove} from "react-sortable-hoc";


class Tags extends Component {
    constructor() {
        super();
        this.state = {
            activeTag: '',
            tags: []
        }
    }


    onChange = (e) => {
        this.setState({
            activeTag: e.target.value
        });
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.addTag();
        }
    };

    addTag = () => {
      const tags = this.state.tags.slice();
      tags.push({
          value: this.state.activeTag,
          index: tags.length
      });
      this.setState({
          activeTag: '',
          tags
      });
    };

    deleteTag = (tagIndex) => {
        const tags = this.state.tags.filter(d => d.index !== tagIndex);

        this.setState({
            tags
        })
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            tags: arrayMove(this.state.tags, oldIndex, newIndex),
        });
    };

    render() {
        const { activeTag, tags } = this.state;
        return (
            <div className="tags-wrapper">
                <div className="tag-input-wrapper">
                    <div className="tag-input-container">
                        <label for="tag">Your Skills (Upto 10)</label>
                        <input type="text" value={activeTag} disabled={tags.length === 10} onChange={this.onChange} onKeyPress={this.onKeyPress} id="tag"/>
                    </div>
                    <div className="add-tag-wrapper">
                        <button className="add-tag-button" disabled={tags.length === 10} onClick={this.addTag}>Add</button>
                    </div>
                </div>

                <TagsList tags={tags} deleteTag={this.deleteTag} onSortEnd={this.onSortEnd}/>
                <div className="submit-tags-wrapper">
                    <button className="submit-tags-button">Continue</button>
                </div>
            </div>
        );
    }
}

//TODO: add button

export default Tags;
