import React, { Component } from "react";

var json = require("./data.json");

function UpdateData() {
  /*const fs = require("fs");
  fs.unlink("./data.json");
  fs.writeFile("./data.json", JSON.stringify(json));*/
}

class AddTag extends Component {
  constructor(props) {
    super(props);
    this.executeAdd = this.executeAdd.bind(this);
  }

  executeAdd(e) {
    var tag = document.getElementById("newTag").value;
    var text = document.getElementById("newText").value;
    json.pikapak.data.push({ tags: tag, text: text });

    UpdateData();

    e.preventDefault();
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
