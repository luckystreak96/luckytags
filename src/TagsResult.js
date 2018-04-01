import React, { Component } from "react";
import "./TagsResult.css";

var json = require("./data.json");

class TagsResult extends Component {
  render() {
    return (
      <div className="TagsResult">
        <table>
          <colgroup>
            <col width="80%" />
            <col width="20%" />
          </colgroup>
          <tbody>
            <tr>
              <th>Tags</th>
              <th>Text</th>
            </tr>
            <tr>
              {json.pikapak.data.map(dat => <td key={dat.tags}>{dat.tags}</td>)}
            </tr>
            <tr>
              {json.pikapak.data.map(dat => <td key={dat.tags}>{dat.text}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TagsResult;
