import React, { Component } from "react";

class AddTag extends Component {
  constructor(props) {
    super(props);
    this.executeAdd = this.executeAdd.bind(this);
  }

  callApi = async () => {
    var x = {data: {tags: document.getElementById("newTag").value, text: document.getElementById("newText").value}};

    const final = await fetch("/tags/pikapak", {body: JSON.stringify(x), method: 'PUT', headers: {   
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    }});

    if (final.status !== 200) throw Error(final.json().message);

    return final;
  };

  executeAdd(e) {

    this.callApi()
      .then(res => console.debug(res))//this.apiCallback(res))
      .catch(err => console.log(err));

    e.preventDefault();
    this.props.onClick();
    document.getElementById("newTag").value = "";
    document.getElementById("newText").value = "";
  }

  render() {
    return (
      <div className="AddNewTag">
        <form onSubmit={this.executeAdd} role="button">
          <input id="newTag" type="text" name="newTag" placeholder="Tags" />
          <input id="newText" type="text" name="newText" placeholder="Text" />
          <input id="submitAdd" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddTag;
